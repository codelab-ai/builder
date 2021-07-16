import { request, setupTestModule } from '@codelab/backend'
import {
  __AppFragment,
  CreateAppGql,
  CreateAppMutation,
  CreateAppMutationVariables,
  CreatePageGql,
  CreatePageMutation,
  CreatePageMutationVariables,
  GetPageGql,
  GetPageQuery,
  Maybe,
  PageFullFragment,
} from '@codelab/codegen/graphql'
import { AppModule } from '@codelab/modules/app-api'
import { PageModule } from '@codelab/modules/page-api'
import { INestApplication } from '@nestjs/common'
import { print } from 'graphql'

export const createTestApp = async (
  nestApplication: INestApplication,
  accessToken = '',
) => {
  const variables: CreateAppMutationVariables = {
    input: {
      // ok: you can take in the name as paramter with default value, that way you know what name to expect when calling the helper method
      name: 'Test App',
    },
  }

  const r: __AppFragment = await request(nestApplication.getHttpServer())
    .set('Authorization', `Bearer ${accessToken}`)
    .send({
      query: print(CreateAppGql),
      variables,
    })
    .expect(200)
    .then((res: any) => (res.body.data as CreateAppMutation)?.createApp)

  return r
}

export const createTestPage = async (
  nestApplication: INestApplication,
  accessToken = '',
  appId = '',
): Promise<Maybe<PageFullFragment> | undefined> => {
  if (!appId) {
    appId = (await createTestApp(nestApplication, accessToken)).id
  }

  const variables: CreatePageMutationVariables = {
    input: {
      appId,
      name: 'Test Page',
    },
  }

  // Create a page
  const createdPage = await request(nestApplication.getHttpServer())
    .set('Authorization', `Bearer ${accessToken}`)
    .send({
      query: print(CreatePageGql),
      variables,
    })
    .expect((r) => r)
    .expect(200)
    .then((res) => (res.body.data as CreatePageMutation)?.createPage)

  // Query the page just created to get the root element of the page
  const page = await request(nestApplication.getHttpServer())
    .set('Authorization', `Bearer ${accessToken}`)
    .send({
      query: print(GetPageGql),
      variables: {
        input: {
          pageId: createdPage.id,
        },
      },
    })
    .expect(200)
    .then((res) => (res.body.data as GetPageQuery)?.page)

  return page
}
