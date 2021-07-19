import {
  CreateResponse,
  DgraphElement,
  DgraphEntityType,
  DgraphProvider,
  DgraphTokens,
  DgraphUpdateMutationJson,
  DgraphUseCase,
} from '@codelab/backend'
import { Atom, GetAtomService } from '@codelab/modules/atom-api'
import { Inject, Injectable } from '@nestjs/common'
import { Mutation, Txn } from 'dgraph-js'
import { ElementGuardService } from '../../auth'
import { GetElementService } from '../get-element'
import { GetLastOrderChildService } from '../get-last-order-child'
import { CreateElementInput } from './create-element.input'
import { CreateElementRequest } from './create-element.request'

@Injectable()
export class CreateElementService extends DgraphUseCase<
  CreateElementRequest,
  CreateResponse
> {
  constructor(
    @Inject(DgraphTokens.DgraphProvider)
    protected readonly dgraphProvider: DgraphProvider,
    private getElementService: GetElementService,
    private getLastOrderChildService: GetLastOrderChildService,
    private getAtomService: GetAtomService,
    private elementGuardService: ElementGuardService,
  ) {
    super(dgraphProvider)
  }

  protected async executeTransaction(
    { input }: CreateElementRequest,
    txn: Txn,
  ): Promise<CreateResponse> {
    const order = await this.getOrder(input)
    const mu = this.createMutation({ ...input, order })
    const mutationResult = await txn.mutate(mu)
    await txn.commit()

    const createdElementId = mutationResult.getUidsMap().get('element')

    if (!createdElementId) {
      throw CreateElementService.createError()
    }

    return { id: createdElementId }
  }

  private createMutation({
    parentElementId,
    order,
    name,
    atomId,
  }: CreateElementInput) {
    const mu = new Mutation()

    const element: DgraphUpdateMutationJson<DgraphElement> = {
      uid: parentElementId,
      children: {
        uid: '_:element',
        name,
        'dgraph.type': [DgraphEntityType.Node, DgraphEntityType.Element],
        atom: atomId ? { uid: atomId } : null,
        'children|order': order || 1,
      },
    }

    mu.setSetJson(element)

    return mu
  }

  private static createError() {
    return new Error('Error while creating element')
  }

  /**
   * Returns the order from the request if defined, if not - gets the order of the last child of the same parent
   * and returns it + 1
   */
  private async getOrder(request: CreateElementInput): Promise<number> {
    const { order, parentElementId } = request

    if (order) {
      return order
    }

    // if we don't have order - put it last
    const lastOrderChild = await this.getLastOrderChildService.execute({
      elementId: parentElementId,
    })

    if (lastOrderChild && typeof lastOrderChild.order === 'number') {
      return lastOrderChild.order + 1
    }

    return 1
  }

  protected async validate({
    input: { parentElementId, atomId },
    currentUser,
  }: CreateElementRequest) {
    await this.elementGuardService.validate(parentElementId, currentUser)

    let atom: Atom | null | undefined

    if (atomId) {
      atom = await this.getAtomService.execute({ atomId })

      if (!atom) {
        throw new Error('Atom not found')
      }
    }
  }
}
