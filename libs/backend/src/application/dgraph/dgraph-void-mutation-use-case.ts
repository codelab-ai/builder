import { Mutation, Txn } from 'dgraph-js'
import { DgraphUseCase } from './dgraph-use-case'

export abstract class DgraphVoidMutationUseCase<
  TUseCaseRequestPort,
  TValidationContext = void,
> extends DgraphUseCase<TUseCaseRequestPort, void, TValidationContext> {
  protected async executeTransaction(
    request: TUseCaseRequestPort,
    txn: Txn,
    validationContext: TValidationContext,
  ) {
    const mu = this.createMutation(request, validationContext)
    await this.performMutation(mu, txn)
  }

  protected abstract createMutation(
    request: TUseCaseRequestPort,
    validationContext: TValidationContext,
  ): Mutation
}
