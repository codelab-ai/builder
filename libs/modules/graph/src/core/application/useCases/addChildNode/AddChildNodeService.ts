import { left, right } from 'fp-ts/Either'
import { Option, fold, isNone } from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'
import { EdgeRepositoryPort } from '../../../adapters/EdgeRepositoryPort'
import { GraphRepositoryPort } from '../../../adapters/GraphRepositoryPort'
import { VertexRepositoryPort } from '../../../adapters/VertexRepositoryPort'
import { Edge } from '../../../domain/edge/edge'
import { Graph } from '../../../domain/graph/graph'
import { Vertex } from '../../../domain/vertex/vertex'
import { AddChildNodeErrors } from './AddChildNodeErrors'
import { AddChildNodeRequest } from './AddChildNodeRequest'
import { AddChildNodeResponse } from './AddChildNodeResponse'
import { AddChildNodeUseCase } from './AddChildNodeUseCase'
import { Result } from '@codelab/backend'

export class AddChildNodeService implements AddChildNodeUseCase {
  constructor(
    private readonly graphRepository: GraphRepositoryPort,
    private readonly vertexRepository: VertexRepositoryPort,
    private readonly edgeRepository: EdgeRepositoryPort,
  ) {}

  async execute(request: AddChildNodeRequest): Promise<AddChildNodeResponse> {
    const { graphId, parentVertexId, vertex, order } = request

    const graph: Option<Graph> = await this.graphRepository.findOne({
      id: graphId,
    })

    if (isNone(graph)) {
      return left(new AddChildNodeErrors.GraphNotFoundError(graphId))
    }

    const parentVertexExists = await this.vertexRepository.exists({
      id: parentVertexId,
    })

    if (!parentVertexExists) {
      return left(new AddChildNodeErrors.VertexNotFoundError(parentVertexId))
    }

    /**
     * After all invariant checks
     */
    const newVertex = await this.vertexRepository.create(
      Vertex.create(vertex),
      graph.value.id,
    )

    if (isNone(newVertex)) {
      return left(new AddChildNodeErrors.VertexNotFoundError(parentVertexId))
    }

    const newEdge = Edge.create({
      source: parentVertexId,
      target: newVertex.value.id,
      order: order ?? 0,
      props: {},
    })

    await this.edgeRepository.create(newEdge, graph.value)

    const newGraph = await this.graphRepository.findOne({
      id: graphId,
    })

    return pipe(
      newGraph,
      fold(
        () => left(new AddChildNodeErrors.GraphNotFoundError(graphId)),
        (g) => right(Result.ok(g)),
      ),
    )
  }
}
