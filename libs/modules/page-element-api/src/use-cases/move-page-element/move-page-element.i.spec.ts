// import { INestApplication } from '@nestjs/common'
// import { PageElementModule } from '../../../../framework/nestjs/PageElementModule'
// import { setupTestModule, teardownTestModule } from '@codelab/backend'
//
// describe('MovePageElementUseCase', () => {
//   let app: INestApplication
//
//   beforeAll(async () => {
//     app = await setupTestModule(app, PageElementModule)
//   })
//
//   afterAll(async () => {
//     await teardownTestModule(app)
//   })
//
//   it('should be truthy', () => {
//     expect(true).toBeTruthy()
//
//     // await request(app.getHttpServer())
//     //   .post('/graphql')
//     //   .set('Authorization', '')
//     //   .send({
//     //     query: print(CreateAppGql),
//     //     variables: {
//     //       input: {
//     //         title,
//     //       },
//     //     },
//     //   })
//     //   .expect(200)
//     //   .then((res) => {
//     //     expect(res.body.data).toBe('')
//     //   })
//   })
// })