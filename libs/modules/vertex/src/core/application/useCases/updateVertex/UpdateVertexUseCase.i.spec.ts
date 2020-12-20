import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { Connection } from 'typeorm'
import { TestInfrastructureModule } from '@codelab/backend'
import { EdgeModule } from '@codelab/modules/edge'
import { GraphModule } from '@codelab/modules/graph'
import { VertexModule } from '@codelab/modules/vertex'

describe.skip('UpdateVertexUseCase', () => {
  let app: INestApplication
  let connection: Connection

  beforeAll(async () => {
    const testModule = await Test.createTestingModule({
      imports: [
        TestInfrastructureModule,
        VertexModule,
        GraphModule,
        EdgeModule,
      ],
    }).compile()

    app = testModule.createNestApplication()
    connection = app.get(Connection)
    await app.init()
  })

  afterAll(async () => {
    await connection.close()
    await app.close()
  })

  beforeEach(async () => {
    await connection.query('DELETE FROM vertex')
    await connection.query('DELETE FROM graph')
  })

  afterEach(async () => {
    await connection.query('DELETE FROM vertex')
    await connection.query('DELETE FROM graph')
  })

  it('should update vertex', async () => {
    const label = 'Graph 1'
    const createGraphMutation = `mutation {
			createGraph(graph: {label: "${label}"}) { id label }
		}`

    const createNewGraph = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: createGraphMutation,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.createGraph.label).toEqual(label)
      })
    const newGraphId = createNewGraph.body.data.createGraph.id
    const createNewVertexMutation = `
			mutation {
				createVertex(vertex: {
				type: React_Fragment,  
				graph_id: "${newGraphId}" 
				props: { id: "123"}}) { id type props }
			}
		`
    const createNewVertex = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: createNewVertexMutation,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.createVertex.type).toEqual('React_Fragment')
        expect(res.body.data.createVertex.props).toEqual({ id: '123' })
      })
    const newVertexId = createNewVertex.body.data.createVertex.id
    const updateVertexMutation = `
          mutation {
            updateVertex(vertex: {id: "${newVertexId}", props: { id: "12345", other: "someVal2" }}) {
              type
              props
            }
          }
    `
    const updateExistingVertex = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: updateVertexMutation,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.updateVertex.type).toEqual('React_Fragment')
        expect(res.body.data.updateVertex.props).toEqual({
          id: '12345',
          other: 'someVal2',
        })
      })
  })
})
