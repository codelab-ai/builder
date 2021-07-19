import {
  DgraphApp,
  DgraphEntityType,
  DgraphQueryBuilderV2,
  DgraphQueryUseCase,
} from '@codelab/backend'
import { Injectable } from '@nestjs/common'
import { App } from '../../app.model'
import { GetAppsRequest } from './get-apps.request'

@Injectable()
export class GetAppsService extends DgraphQueryUseCase<
  GetAppsRequest,
  DgraphApp,
  Array<App>
> {
  protected createQuery({ ownerId }: GetAppsRequest) {
    return new DgraphQueryBuilderV2()
      .setTypeFunc(DgraphEntityType.App)
      .addEqFilterDirective<DgraphApp>('ownerId', ownerId)
      .addBaseFields()
      .addExpandAll()
  }

  protected mapResult(response: Array<DgraphApp>) {
    return response.map(App.fromDgraph)
  }
}
