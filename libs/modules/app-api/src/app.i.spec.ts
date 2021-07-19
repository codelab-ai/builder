import { ApolloQueryResult } from '@apollo/client'
import {
  ApiResponse,
  Auth0Service,
  graphqlRequest,
  request,
  setupTestModule,
  teardownTestModule,
} from '@codelab/backend'
import {
  CreateAppGql,
  CreateAppMutationResult,
  CreateAppMutationVariables,
  DeleteAppGql,
  DeleteAppMutationVariables,
  GetAppGql,
  GetAppQueryResult,
  GetAppQueryVariables,
  GetAppsGql,
  GetAppsQueryResult,
  UpdateAppGql,
  UpdateAppMutationVariables,
} from '@codelab/codegen/graphql'
import { INestApplication } from '@nestjs/common'
import { print } from 'graphql'
import { AppModule } from './app.module'

describe('AppModule', () => {
  let app: INestApplication
  let accessToken = ''

  beforeAll(async () => {
    app = await setupTestModule(app, AppModule)

    const auth0Service = app.get(Auth0Service)
    accessToken = await auth0Service.getAccessToken()
  })

  afterAll(async () => {
    await teardownTestModule(app)
  })

  let createdAppId: string

  describe('CreateApp', () => {
    const createVariables: CreateAppMutationVariables = {
      input: {
        name: 'Codelab',
      },
    }

    it('should fail to create an app for a guest', async () => {
      await request(app.getHttpServer())
        .send({
          query: print(CreateAppGql),
          variables: createVariables,
        })
        .expect(200)
        .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
          expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
        })
    })

    it('should create an app for an authorized user', async () => {
      createdAppId = await request(app.getHttpServer())
        .set('Authorization', `Bearer ${accessToken}`)
        .send({
          query: print(CreateAppGql),
          variables: createVariables,
        })
        .expect(200)
        .expect((res: ApiResponse<CreateAppMutationResult>) => {
          expect(res.body.data?.createApp.id).toBeTruthy()
        })
        .then((res) => res.body.data?.createApp.id)
    })
  })

  describe('UpdateApp', () => {
    let updateVariables: UpdateAppMutationVariables | undefined

    it('should not update an app for a guest', async () => {
      // Doesn't work inside "describe" block
      updateVariables = {
        input: {
          id: createdAppId,
          data: {
            name: 'Codelab V2',
          },
        },
      }

      await request(app.getHttpServer())
        .send({
          query: print(UpdateAppGql),
          variables: updateVariables,
        })
        .expect(200)
        .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
          expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
        })
    })

    it('should update an app for an authorized user', async () => {
      await request(app.getHttpServer())
        .set('Authorization', `Bearer ${accessToken}`)
        .send({
          query: print(UpdateAppGql),
          variables: updateVariables,
        })
        .expect(200)
        .expect(() => {
          return request(app.getHttpServer())
            .send({
              query: print(GetAppGql),
              variables: { input: { appId: updateVariables } },
            })
            .expect(200)
            .expect((getRes: ApiResponse<ApolloQueryResult<any>>) => {
              expect(getRes.body.data?.app).toMatchObject({
                id: createdAppId,
                name: 'Codelab V2',
              })
            })
        })
    })
  })

  describe('GetApp', () => {
    let getVariables: GetAppQueryVariables

    it('should not get an app for a guest', async () => {
      getVariables = {
        input: {
          appId: createdAppId,
        },
      }

      await request(app.getHttpServer())
        .send({
          query: print(GetAppGql),
          variables: getVariables,
        })
        .expect(200)
        .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
          expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
        })
    })

    it('should get an app for an authorized user', async () => {
      getVariables = {
        input: {
          appId: createdAppId,
        },
      }

      await request(app.getHttpServer())
        .set('Authorization', `Bearer ${accessToken}`)
        .send({
          query: print(GetAppGql),
          variables: getVariables,
        })
        .expect((res: ApiResponse<GetAppQueryResult>) => {
          expect(res.body.data?.app).toMatchObject({
            id: createdAppId,
            name: 'Codelab V2',
          })
        })
    })
  })

  describe('GetApps', () => {
    it('should not get apps for a guest', async () => {
      await request(app.getHttpServer())
        .send({
          query: print(GetAppsGql),
        })
        .expect(200)
        .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
          expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
        })
    })

    it('should get an app for an authorized user', async () => {
      await request(app.getHttpServer())
        .set('Authorization', `Bearer ${accessToken}`)
        .send({
          query: print(GetAppsGql),
        })
        .expect(200)
        .expect((res: ApiResponse<GetAppsQueryResult>) => {
          expect(res.body.data?.apps).toMatchObject([
            {
              id: createdAppId,
              name: 'Codelab V2',
            },
          ])
        })
    })
  })

  describe('Delete', () => {
    it('should fail to delete an app for a guest', async () => {
      await request(app.getHttpServer())
        .send({
          query: print(DeleteAppGql),
          variables: {
            input: {
              appId: createdAppId,
            },
          },
        })
        .expect(200)
        .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
          expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
        })
    })

    it('should delete an app for an authorized user', async () => {
      await graphqlRequest<DeleteAppMutationVariables>(
        app,
        DeleteAppGql,
        { input: { appId: createdAppId } },
        { accessToken },
      )
    })
  })
})
