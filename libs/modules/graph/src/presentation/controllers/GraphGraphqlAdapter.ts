import { Injectable } from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { AddChildNodeInput } from '../../core/application/useCases/addChildNode/AddChildNodeInput'
import { AddChildNodeService } from '../../core/application/useCases/addChildNode/AddChildNodeService'
import { CreateGraphInput } from '../../core/application/useCases/createGraph/CreateGraphInput'
import { CreateGraphService } from '../../core/application/useCases/createGraph/CreateGraphService'
import { DeleteNodeInput } from '../../core/application/useCases/deleteNode/DeleteNodeInput'
import { DeleteNodeService } from '../../core/application/useCases/deleteNode/DeleteNodeService'
import { GetGraphByInput } from '../../core/application/useCases/getGraph/GetGraphByInput'
import { GetGraphInput } from '../../core/application/useCases/getGraph/GetGraphInput'
import { GetGraphService } from '../../core/application/useCases/getGraph/GetGraphService'
import { MoveNodeInput } from '../../core/application/useCases/moveNode/MoveNodeInput'
import { MoveNodeService } from '../../core/application/useCases/moveNode/MoveNodeService'
import { UpdateNodeInput } from '../../core/application/useCases/updateNode/UpdateNodeInput'
import { UpdateNodeService } from '../../core/application/useCases/updateNode/UpdateNodeService'
import { Edge } from '../../core/domain/edge/Edge'
import { Graph } from '../../core/domain/graph/Graph'
import { Vertex } from '../../core/domain/vertex/Vertex'
import { PrismaService } from '@codelab/backend'

@Resolver(() => Graph)
@Injectable()
export class GraphGraphqlAdapter {
  constructor(
    private readonly createGraphService: CreateGraphService,
    private readonly addChildNodeService: AddChildNodeService,
    private readonly deleteNodeService: DeleteNodeService,
    private readonly updateNodeService: UpdateNodeService,
    private readonly moveNodeService: MoveNodeService,
    private readonly getGraphService: GetGraphService,
    private readonly prismaService: PrismaService,
  ) {}

  @Mutation(() => Graph)
  createGraph(@Args('input') input: CreateGraphInput) {
    return this.createGraphService.execute(input)
  }

  @Mutation(() => Graph)
  addChildNode(@Args('input') input: AddChildNodeInput) {
    return this.addChildNodeService.execute(input)
  }

  @Mutation(() => Graph)
  updateNode(@Args('input') input: UpdateNodeInput) {
    return this.updateNodeService.execute(input)
  }

  @Query(() => Graph)
  getGraph(@Args('input') input: GetGraphInput) {
    return this.getGraphService.execute(input)
  }

  @Query(() => Graph)
  getGraphBy(@Args('input') input: GetGraphByInput) {
    return this.getGraphService.getGraphBy(input)
  }

  @Mutation(() => Graph)
  deleteNode(@Args('input') input: DeleteNodeInput) {
    return this.deleteNodeService.execute(input)
  }

  @Mutation(() => Graph)
  moveNode(@Args('input') input: MoveNodeInput) {
    return this.moveNodeService.execute(input)
  }

  @ResolveField('vertices', (returns) => [Vertex])
  getVertices(@Parent() graph: Graph) {
    return this.prismaService.vertex.findMany({
      where: {
        graphId: graph.id,
      },
    })
  }

  @ResolveField('edges', (returns) => [Edge])
  edges(@Parent() graph: Graph) {
    return this.prismaService.edge.findMany({
      where: {
        graphId: graph.id,
      },
    })
  }
}