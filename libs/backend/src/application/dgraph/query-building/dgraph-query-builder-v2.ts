import { DgraphEntity } from '../interfaces'
import { DgraphQueryField } from './dgraph-query-field'
import { DgraphFilter } from './filters'
import {
  IBuildable,
  IDgraphQueryFilter,
  IQueryBuilder,
} from './i-query-builder'
import { compileMultiple } from './utils'

/**
 *  Right now there are a lot of moving parts here. It's mostly string concatenating, but if it comes to that we can optimize it by pre-compiling the queries and only substituting the filter at runtime. But I don't know if the performance benefit is enough to consider, maybe we can measure it vs just a regular string query if we need
 *
 *
 */

type DgraphQueryJsonValue<
  key extends keyof TEntity,
  TEntity extends DgraphEntity<any>,
> = TEntity[key] extends infer TValue | undefined | null
  ? TValue extends DgraphEntity<any>
    ? DgraphQueryJson<TValue> | boolean
    : TValue extends Array<infer TItem>
    ? TItem extends DgraphEntity<any>
      ? DgraphQueryJson<TItem> | boolean
      : boolean | undefined
    : boolean | undefined
  : boolean | undefined

export type DgraphQueryJson<TEntity extends DgraphEntity<any>> = {
  [key in keyof TEntity & string]?: DgraphQueryJsonValue<key, TEntity> | boolean
}

export type WithReverseFields<TOtherEntity extends DgraphEntity<any>> = {
  [key in keyof TOtherEntity & string as `~${key}`]?: TOtherEntity[key] extends
    | DgraphEntity<any>
    | Array<DgraphEntity<any>>
    | undefined
    | null
    ? DgraphQueryJsonValue<key, TOtherEntity> | boolean
    : never
}

export type InferQueryResult<
  TJsonQuery extends DgraphQueryJson<TEntity>,
  TEntity extends DgraphEntity<any>,
> = {
  [key in keyof TEntity & string]: TJsonQuery[key] extends
    | undefined
    | null
    | false
    | never
    ? never
    : TJsonQuery[key] extends DgraphQueryJson<infer TInnerEntity>
    ? InferQueryResult<TJsonQuery[key], TInnerEntity>
    : TEntity[key]
}

export class DgraphQueryBuilderV2 implements IQueryBuilder {
  protected _queryName = 'query'

  protected _func?: Array<IDgraphQueryFilter>

  protected _directive?: string | IBuildable

  protected _fields: Array<DgraphQueryField | string>

  constructor() {
    this._fields = []
  }

  public getField(name: string): DgraphQueryField | undefined {
    return this._fields.find(
      (f): f is DgraphQueryField => typeof f === 'object' && f.name == name,
    )
  }

  public get fields() {
    return this._fields
  }

  withQueryName(queryName: string) {
    this._queryName = queryName

    return this
  }

  /** Sets the func to a new value */
  withFunc(func: string | IDgraphQueryFilter | Array<IDgraphQueryFilter>) {
    if (typeof func === 'string') {
      return this.withFilterFuncString(func)
    }

    if (Array.isArray(func)) {
      return this.withFiltersFunc(func)
    }

    return this.withFilterFunc(func)
  }

  withFilterFuncString(filterString: string) {
    this._func = [new DgraphFilter().withFilter(filterString)]

    return this
  }

  withFilterFunc(filter: IDgraphQueryFilter) {
    this._func = [filter]

    return this
  }

  withFiltersFunc(filters: Array<IDgraphQueryFilter>) {
    this._func = filters

    return this
  }

  withDirective(directive: string | IBuildable) {
    this._directive = directive

    return this
  }

  withUidFunc(uid: string) {
    return this.withFilterFuncString(`uid(${uid})`)
  }

  withTypeFunc(type: string) {
    return this.withFilterFuncString(`type(${type})`)
  }

  withUidsFunc(uids: Array<string>) {
    return this.withFilterFuncString(`uid(${uids.join(',')})`)
  }

  withRecurse() {
    return this.withDirective('@recurse')
  }

  /** Appends fields to the current field selection */
  withFields(...fields: Array<DgraphQueryField | string>) {
    for (const f of fields) {
      if (typeof f === 'object') {
        f.compile()
      }
    }

    this._fields.push(...fields)

    return this
  }

  withJsonReverseFields<TOtherEntity extends DgraphEntity<any>>(
    json: WithReverseFields<TOtherEntity>,
  ) {
    return this.withJsonFields(json as any)
  }

  withJsonFields<TEntity extends DgraphEntity<any>>(
    json: DgraphQueryJson<TEntity>,
  ) {
    Object.keys(json).forEach((key) => {
      const value = (json as any)[key]

      if (typeof value === 'object') {
        this.withFields(key + value)
      } else if (value) {
        this.withFields(key)
      }
    })

    return this
  }

  /** Appends uid and dgraph.type to the current field selection */
  withBaseFields() {
    return this.withFields('uid', 'dgraph.type')
  }

  build(): string {
    if (!this._queryName) {
      throw new Error('Query name must be provided to query builder')
    }

    if (!this._func) {
      throw new Error('Func must be provided to query builder')
    }

    if (!this._fields || !this._fields.length) {
      throw new Error('Fields must be provided to query builder')
    }

    const fieldsSet = new Set(
      this._fields.map((f) => (typeof f === 'string' ? f : f.name)),
    )

    // Check if there are duplicate fields, otherwise it's very hard to track down the error dgraph gives you if there are duplicate fields
    if (Array.from(fieldsSet).length !== this.fields.length) {
      throw new Error('Duplicate field in query')
    }

    const fieldsString = compileMultiple(this._fields)

    // Remove the connection prefix from the first filter
    if (
      this._func &&
      this._func.length > 0 &&
      this._func[0] instanceof DgraphFilter
    ) {
      ;(this._func[0] as DgraphFilter).withConnectionPrefix(undefined)
    }

    const funcString = compileMultiple(this._func)

    const directiveString =
      typeof this._directive === 'string' || !this._directive
        ? this._directive
        : this._directive.build()

    return `
       {
          ${this._queryName}(func: ${funcString}) ${directiveString || ''} {
              ${fieldsString}
          }
       }
    `
  }

  static fieldsFromEnum(
    enums: Record<string, string>,
  ): Array<DgraphQueryField> {
    return Object.values(enums).map(
      (enumValue) => new DgraphQueryField(enumValue),
    )
  }
}
