import {
  DgraphApp,
  DgraphGetUseCase,
  DgraphQueryBuilderV2,
} from '@codelab/backend'
import { Injectable } from '@nestjs/common'
import { App } from '../../app.model'
import { GetAppRequest } from './get-app.request'

@Injectable()
export class GetAppService extends DgraphGetUseCase<
  GetAppRequest,
  DgraphApp,
  App
> {
  protected createQuery({ input: { appId } }: GetAppRequest) {
    return new DgraphQueryBuilderV2()
      .setUidFunc(appId)
      .addBaseFields()
      .addExpandAll()
  }

  protected mapResult(app: DgraphApp, { currentUser }: GetAppRequest) {
    // We don't use the appGuard here because it would create a circular dependency
    // and because we allow it if the app doesn't exist
    if (!currentUser || app.ownerId !== currentUser?.sub) {
      throw new Error("You don't have access to this app")
    }

    return App.fromDgraph(app)
  }
}
