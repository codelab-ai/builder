import { FetchResult } from '@apollo/client'
import { ApolloClientService, MutationUseCase } from '@codelab/backend'
import {
  CreateAppGql,
  CreateAppMutation,
  CreateAppMutationVariables,
} from '@codelab/dgraph'
import { Injectable } from '@nestjs/common'
import { App } from '../../app.model'
import { CreateAppRequest } from './create-app.request'

@Injectable()
export class CreateAppService extends MutationUseCase<
  CreateAppRequest,
  App,
  CreateAppMutation,
  CreateAppMutationVariables
> {
  constructor(apollo: ApolloClientService) {
    super(apollo)
  }

  protected getGql() {
    return CreateAppGql
  }

  protected extractDataFromResult(result: FetchResult<CreateAppMutation>) {
    if (
      !result.data?.addApp?.app ||
      !result.data?.addApp?.app.length ||
      !result.data.addApp.app[0]
    ) {
      throw new Error('Error while creating app')
    }

    return result.data.addApp.app[0]
  }

  protected mapVariables(
    request: CreateAppRequest,
  ): CreateAppMutationVariables {
    if (!request.ownerId) {
      throw new Error('No ownerId provided')
    }

    return {
      input: {
        name: request.input.name,
        ownerId: request.ownerId,
      },
    }
  }
}
