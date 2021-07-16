import {
  DgraphApp,
  DgraphElement,
  DgraphEntity,
  DgraphEntityType,
  DgraphQueryBuilderV2,
  DgraphTree,
  DgraphUseCase,
  instanceOfDgraphModel,
} from '@codelab/backend'
import { Injectable } from '@nestjs/common'
import { Txn } from 'dgraph-js'
import { GetElementOwnerRequest } from './get-element-owner.request'
import { GetElementOwnerResponse } from './get-element-owner.response'

type QueryResult = {
  '~children'?: Array<QueryResult>
  '~root'?: [QueryResult]
  name?: string
  ownerId?: string
  '~pages'?: [QueryResult]
} & DgraphEntity<any>

@Injectable()
export class GetElementOwnerService extends DgraphUseCase<
  GetElementOwnerRequest,
  GetElementOwnerResponse
> {
  protected async executeTransaction(
    { elementId }: GetElementOwnerRequest,
    txn: Txn,
  ): Promise<GetElementOwnerResponse> {
    const response = await txn.query(this.createQuery(elementId))
    const result = response.getJson().query[0] as QueryResult | undefined

    if (!result) {
      return { found: false }
    }

    let tree: QueryResult | undefined

    const visit = (node: QueryResult) => {
      if (node['~root'] && node['~root'].length) {
        tree = node['~root'][0]

        return
      }

      if (node['~children'] && node['~children'].length) {
        node['~children'].forEach(visit)
      }
    }

    visit(result)

    if (!tree) {
      throw new Error("Can't find owner of root-less element")
    }

    if (
      instanceOfDgraphModel(tree, DgraphEntityType.Page) &&
      tree['~pages'] &&
      tree['~pages'][0] &&
      tree['~pages'][0].ownerId
    ) {
      return {
        found: true,
        treeId: tree.uid,
        ownerId: tree['~pages'][0].ownerId as string,
      }
    } else {
      throw new Error('Unknown tree type ' + tree['dgraph.type'])
    }
  }

  private createQuery(elementId: string) {
    // We need the id of the tree which has this element
    return new DgraphQueryBuilderV2()
      .withBaseFields()
      .withRecurse()
      .withJsonFields<DgraphElement & DgraphApp>({
        name: true,
        ownerId: true,
      })
      .withJsonReverseFields<DgraphTree<any, any> & DgraphElement & DgraphApp>({
        '~root': true,
        '~children': true,
        '~pages': true,
      })
      .withUidFunc(elementId)
      .build()
  }
}
