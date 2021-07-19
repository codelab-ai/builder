import { Inject } from '@nestjs/common'
import { Mutation, Response, Txn } from 'dgraph-js'
import { DgraphProvider, DgraphTokens } from '../../infrastructure'
import { UseCase } from '../use-case'
import { DgraphQueryBuilderV2 } from './query-building'

export abstract class DgraphUseCase<
  TUseCaseRequestPort,
  TUseCaseDtoResponse,
  TValidationContext = void,
> implements UseCase<TUseCaseRequestPort, TUseCaseDtoResponse>
{
  constructor(
    @Inject(DgraphTokens.DgraphProvider)
    protected readonly dgraphProvider: DgraphProvider,
  ) {}

  async execute(request: TUseCaseRequestPort): Promise<TUseCaseDtoResponse> {
    const validationContext = await this.validate(request)

    return await this.transactionWrapper((txn) =>
      this.executeTransaction(request, txn, validationContext),
    )
  }

  protected async transactionWrapper<TResult>(
    execute: (txn: Txn) => Promise<TResult>,
  ) {
    const txn = this.dgraphProvider.client.newTxn()

    try {
      return await execute(txn)
    } finally {
      await txn.discard()
    }
  }

  protected abstract executeTransaction(
    request: TUseCaseRequestPort,
    txn: Txn,
    validationContext: TValidationContext,
  ): Promise<TUseCaseDtoResponse>

  protected async validate(
    request: TUseCaseRequestPort,
  ): Promise<TValidationContext> {
    return {} as TValidationContext
  }

  // Helper methods:
  protected getUid(response: Response, blankNodeLabel: string) {
    const id = response.getUidsMap().get(blankNodeLabel)

    if (!id) {
      throw new Error(
        `Error while processing dgraph response, uid with label ${blankNodeLabel} not found`,
      )
    }

    return id
  }

  /**
   * Performs a mutation, commits the transaction and returns the UID of the labeled blank node (if supplied)
   */
  protected async performMutation<TStringLabel extends string | undefined>(
    mu: Mutation,
    txn: Txn,
    blankNodeLabel?: TStringLabel,
  ): Promise<TStringLabel extends string ? string : void> {
    const response = await txn.mutate(mu)

    await txn.commit()

    if (typeof blankNodeLabel === 'string') {
      return this.getUid(
        response,
        blankNodeLabel,
      ) as TStringLabel extends string ? string : void
    }

    return void 0 as TStringLabel extends string ? string : void
  }

  protected async performQuery<TResult>(
    qb: DgraphQueryBuilderV2,
    txn: Txn,
  ): Promise<Array<TResult>> {
    return this.performNamedQuery(qb.build(), qb.queryName, txn)
  }

  protected async performNamedQuery<TResult>(
    query: string,
    queryName: string,
    txn: Txn,
  ): Promise<Array<TResult>> {
    return (await txn.query(query)).getJson()[queryName] || null
  }
}
