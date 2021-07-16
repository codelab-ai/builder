import { ApolloQueryResult } from '@apollo/client'
import {
  ApiResponse,
  Auth0Service,
  request,
  setupTestModule,
  teardownTestModule,
} from '@codelab/backend'
import {
  __AppFragment,
  CreateElementGql,
  CreateElementMutation,
  CreateElementMutationVariables,
  Maybe,
  PageBaseFragment,
  PageFullFragment,
} from '@codelab/codegen/graphql'
import { PageModule } from '@codelab/modules/page-api'
import { INestApplication } from '@nestjs/common'
import { print } from 'graphql'
import { ElementModule } from '../../element.module'
import { createTestPage } from '../../utils/testHelpers'

export const createElement = async (
  accessToken: string,
  app: INestApplication,
  parentElementId: string,
) => {
  const variables: CreateElementMutationVariables = {
    input: {
      name: 'Example Element',
      parentElementId: parentElementId
    },
  }

  const r = await request(app.getHttpServer())
    .set('Authorization', `Bearer ${accessToken}`)
    .send({
      query: print(CreateElementGql),
      variables,
    })
    .expect(200)
    .then((res) => (res.body.data as CreateElementMutation)?.createElement)

  return r
}

describe('CreateElement', () => {
  let app: INestApplication
  let accessToken = ''
  let page: PageFullFragment

  beforeAll(async () => {
    app = await setupTestModule(app, PageModule, ElementModule)

    const auth0Service = app.get(Auth0Service)
    accessToken = await auth0Service.getAccessToken()

    // Create test page
    const createdPage = await createTestPage(app, accessToken)

    // ? : please give me your advice. I want to extract non null value of page.
    if (createdPage) {
      page = createdPage
    } else {
      throw new Error('Error while creating page')
    }
  })

  afterAll(async () => {
    await teardownTestModule(app)
  })

  it('should fail to create element for guest', async () => {
    const variables: CreateElementMutationVariables = {
      input: {
        name: 'Example Element',
        parentElementId: page.rootElement.id,
      },
    }

    await request(app.getHttpServer())
      .send({
        query: print(CreateElementGql),
        variables,
      })
      .expect(200)
      .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
        expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
      })
  })

  it('should create an element', async () => {
    const result = await createElement(
      accessToken,
      app,
      page.rootElement.id,
    )

    expect(result).toMatchObject({
      name: 'Example Element',
    })
  })
})
