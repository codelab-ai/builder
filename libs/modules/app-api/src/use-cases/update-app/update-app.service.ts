import {
  DgraphApp,
  DgraphProvider,
  DgraphTokens,
  DgraphUpdateMutationJson,
  DgraphVoidMutationUseCase,
} from '@codelab/backend'
import { Inject, Injectable } from '@nestjs/common'
import { Mutation } from 'dgraph-js'
import { AppGuardService } from '../../auth'
import { UpdateAppRequest } from './update-app.request'

@Injectable()
export class UpdateAppService extends DgraphVoidMutationUseCase<UpdateAppRequest> {
  constructor(
    @Inject(DgraphTokens.DgraphProvider)
    protected readonly dgraphProvider: DgraphProvider,
    private appGuardService: AppGuardService,
  ) {
    super(dgraphProvider)
  }

  protected async validate({
    input: { id },
    currentUser,
  }: UpdateAppRequest): Promise<void> {
    await this.appGuardService.validate(id, currentUser)
  }

  protected createMutation({
    input: {
      id,
      data: { name },
    },
  }: UpdateAppRequest): Mutation {
    const mu = new Mutation()

    const json: DgraphUpdateMutationJson<DgraphApp> = {
      uid: id,
      name,
    }

    mu.setSetJson(json)

    return mu
  }
}
