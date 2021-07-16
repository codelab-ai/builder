import { DgraphProvider, DgraphTokens, DgraphUseCase } from '@codelab/backend'
import { Inject, Injectable } from '@nestjs/common'
import { Txn } from 'dgraph-js'
import { ElementGuardService } from '../../auth'
import { Element } from '../../models'
import { GetElementRequest } from './get-element.request'

@Injectable()
export class GetElementService extends DgraphUseCase<
  GetElementRequest,
  Element | null
> {
  constructor(
    @Inject(DgraphTokens.DgraphProvider)
    protected readonly dgraphProvider: DgraphProvider,
    private elementGuardService: ElementGuardService,
  ) {
    super(dgraphProvider)
  }

  protected executeTransaction(
    request: GetElementRequest,
    txn: Txn,
    validationContext: void,
  ): Promise<Element | null> {
    return Promise.resolve(undefined as any)
  }

  protected async validate({
    currentUser,
    input: { elementId },
  }: GetElementRequest): Promise<void> {
    await this.elementGuardService.validate(elementId, currentUser)
  }
}
