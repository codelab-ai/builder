import { DgraphEntityType } from '../dgraph-entity-type'
import { DgraphEntity } from '../interfaces'
import { DgraphQueryField } from './dgraph-query-field'
import { DgraphFilter, EqFilter } from './filters'
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

/** Not working very well at the moment */
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

  public get queryName() {
    return this._queryName
  }

  protected _func?: Array<IDgraphQueryFilter>

  protected _directive: Array<string | IBuildable> = []

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
  setFunc(func: string | IDgraphQueryFilter | Array<IDgraphQueryFilter>) {
    if (typeof func === 'string') {
      return this.setFilterFuncString(func)
    }

    if (Array.isArray(func)) {
      return this.setFiltersFunc(func)
    }

    return this.setFilterFunc(func)
  }

  /** Will override all previous func filters */
  setFilterFuncString(filterString: string) {
    this._func = [new DgraphFilter().withFilter(filterString)]

    return this
  }

  /** Will override all previous func filters */
  setFilterFunc(filter: IDgraphQueryFilter) {
    this._func = [filter]

    return this
  }

  /** Will override all previous func filters */
  setFiltersFunc(filters: Array<IDgraphQueryFilter>) {
    this._func = filters

    return this
  }

  addDirective(directive: string | IBuildable) {
    this._directive.push(directive)

    return this
  }

  addEqFilterDirective<TEntity extends DgraphEntity<any> | unknown = unknown>(
    predicate: TEntity extends DgraphEntity<any> ? keyof TEntity : string,
    value: string,
  ) {
    return this.addDirective(
      `@filter(${new EqFilter<TEntity>(predicate, value).build()})`,
    )
  }

  /** Will override all previous filters */
  setUidFunc(uid: string) {
    return this.setFilterFuncString(`uid(${uid})`)
  }

  /** Will override all previous func filters */
  setTypeFunc(type: DgraphEntityType) {
    return this.setFilterFuncString(`type(${type})`)
  }

  /** Will override all previous func filters */
  setUidsFunc(uids: Array<string>) {
    return this.setFilterFuncString(`uid(${uids.join(',')})`)
  }

  /** Adds @recurse directive to the query */
  addRecurseDirective() {
    return this.addDirective('@recurse')
  }

  /** Appends fields to the current field selection */
  addFields(...fields: Array<DgraphQueryField | string>) {
    for (const f of fields) {
      if (typeof f === 'object') {
        f.compile()
      }
    }

    this._fields.push(...fields)

    return this
  }

  addJsonReverseFields<TOtherEntity extends DgraphEntity<any>>(
    json: WithReverseFields<TOtherEntity>,
  ) {
    return this.addJsonFields(json as any)
  }

  addJsonFields<TEntity extends DgraphEntity<any>>(
    json: DgraphQueryJson<TEntity>,
  ) {
    Object.keys(json).forEach((key) => {
      const value = (json as any)[key]

      if (typeof value === 'object') {
        this.addFields(key + value)
      } else if (value) {
        this.addFields(key)
      }
    })

    return this
  }

  /** Appends uid and dgraph.type to the current field selection */
  addBaseFields() {
    return this.addFields('uid', 'dgraph.type')
  }

  addExpandAll() {
    return this.addFields('expand(_all_)')
  }

  addExpandType(type: string | Array<string>) {
    const typeArray = Array.isArray(type) ? type : [type]

    return this.addFields(...typeArray.map((typeItem) => `expand(${typeItem})`))
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
      this._directive && this._directive.length
        ? compileMultiple(this._directive)
        : undefined

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
