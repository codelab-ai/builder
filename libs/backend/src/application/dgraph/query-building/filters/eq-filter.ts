import { DgraphEntity } from '../../interfaces'
import { DgraphFilter } from './dgraph-filter'

/** https://dgraph.io/docs/query-language/functions/#inequality */
export class EqFilter<
  TEntity extends DgraphEntity<any> | unknown = unknown,
> extends DgraphFilter {
  private readonly _predicate?: keyof TEntity | string

  private readonly _value?: string

  constructor(
    predicate: TEntity extends DgraphEntity<any> ? keyof TEntity : string,
    value: string,
  ) {
    super()
    this._predicate = predicate
    this._value = value
  }

  build(): string {
    if (!this._predicate) {
      throw new Error("Can't build EqFilter, predicate not provided")
    }

    const valueString = this.getValueString()

    this.withFilter(`eq(${this._predicate}, ${valueString})`)

    return super.build()
  }

  private getValueString() {
    if (!this._value) {
      throw new Error("Can't build EqFilter, value not provided")
    }

    if (
      this._value.startsWith('"') ||
      this._value.startsWith('_:') ||
      this._value.endsWith(')') ||
      this._value == '*'
    ) {
      return this._value
    }

    if (this._value.startsWith('0x')) {
      return `<${this._value}>`
    }

    return `"${this._value}"`
  }
}
