import {
  DgraphProvider,
  DgraphTokens,
  DgraphVoidMutationUseCase,
} from '@codelab/backend'
import { Inject, Injectable } from '@nestjs/common'
import { Mutation } from 'dgraph-js'
import { AppGuardService } from '../../auth'
import { DeleteAppRequest } from './delete-app.request'

@Injectable()
export class DeleteAppService extends DgraphVoidMutationUseCase<DeleteAppRequest> {
  constructor(
    @Inject(DgraphTokens.DgraphProvider)
    dgraphProvider: DgraphProvider,
    private appGuardService: AppGuardService,
  ) {
    super(dgraphProvider)
  }

  protected async validate({
    input: { appId },
    currentUser,
  }: DeleteAppRequest) {
    await this.appGuardService.validate(appId, currentUser)
  }

  protected createMutation({ input: { appId } }: DeleteAppRequest) {
    const mu = new Mutation()

    mu.setDeleteJson({
      uid: appId,
    })

    return mu
  }
}
