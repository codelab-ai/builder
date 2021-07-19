import { Mutation, Txn } from 'dgraph-js'
import { CreateResponse } from '../graphql'
import { DgraphUseCase } from './dgraph-use-case'

export abstract class DgraphCreateUseCase<
  TUseCaseRequestPort,
  TValidationContext = void,
> extends DgraphUseCase<
  TUseCaseRequestPort,
  CreateResponse,
  TValidationContext
> {
  protected readonly blankNodeLabel = 'entity'

  protected async executeTransaction(
    request: TUseCaseRequestPort,
    txn: Txn,
    validationContext: TValidationContext,
  ): Promise<CreateResponse> {
    const mutation = this.createMutation(
      request,
      `_:${this.blankNodeLabel}`,
      validationContext,
    )

    const id = await this.performMutation(mutation, txn, this.blankNodeLabel)

    return { id }
  }

  protected abstract createMutation(
    request: TUseCaseRequestPort,
    blankNodeUid: string,
    validationContext: TValidationContext,
  ): Mutation
}
