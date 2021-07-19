import { Txn } from 'dgraph-js'
import { DgraphUseCase } from './dgraph-use-case'
import { DgraphEntity } from './interfaces'
import { DgraphQueryBuilderV2 } from './query-building'

export abstract class DgraphGetUseCase<
  TUseCaseRequestPort,
  TDgraphEntity extends DgraphEntity<any>,
  TUseCaseDtoResponse,
  TValidationContext = void,
> extends DgraphUseCase<
  TUseCaseRequestPort,
  TUseCaseDtoResponse | null,
  TValidationContext
> {
  protected readonly queryName = 'query'

  protected async executeTransaction(
    request: TUseCaseRequestPort,
    txn: Txn,
    validationContext: TValidationContext,
  ): Promise<TUseCaseDtoResponse | null> {
    const query = await this.createQuery(request, validationContext)

    const response =
      typeof query === 'string'
        ? await this.performNamedQuery<TDgraphEntity>(
            query,
            this.queryName,
            txn,
          )
        : await this.performQuery<TDgraphEntity>(query, txn)

    if (!response || !response.length) {
      return null
    }

    return this.mapResult(response[0], request, validationContext)
  }

  /** Note: if returning a query string, the this.queryName must be used as a query name (or just "query") */
  protected abstract createQuery(
    request: TUseCaseRequestPort,
    validationContext: TValidationContext,
  ): DgraphQueryBuilderV2 | string | Promise<DgraphQueryBuilderV2 | string>

  protected abstract mapResult(
    dgraphEntity: TDgraphEntity,
    request: TUseCaseRequestPort,
    validationContext: TValidationContext,
  ): TUseCaseDtoResponse | Promise<TUseCaseDtoResponse>
}
