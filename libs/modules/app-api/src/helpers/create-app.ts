import { ApiResponse, request } from '@codelab/backend'
import {
  __AppFragment,
  CreateAppGql,
  CreateAppMutationResult,
  CreateAppMutationVariables,
} from '@codelab/codegen/graphql'
import { INestApplication } from '@nestjs/common'
import { print } from 'graphql'

export const createApp = async (app: INestApplication) => {
  const variables: CreateAppMutationVariables = {
    input: {
      name: 'Test App',
    },
  }

  const createdApp = await request(app.getHttpServer())
    .send({
      query: print(CreateAppGql),
      variables,
    })
    .expect(200)
    .then(
      (res: ApiResponse<CreateAppMutationResult>) =>
        res.body.data?.createApp as __AppFragment,
    )

  return createdApp
}
