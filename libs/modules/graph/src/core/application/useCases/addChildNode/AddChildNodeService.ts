import { Injectable } from '@nestjs/common'
import { Vertex } from '@prisma/client'
import { AddChildNodeInput } from './AddChildNodeInput'
import { PrismaService, TransactionalUseCase } from '@codelab/backend'

@Injectable()
export class AddChildNodeService
  implements TransactionalUseCase<AddChildNodeInput, Vertex> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute({ parentVertexId, vertex, order }: AddChildNodeInput) {
    const graph = await this.prismaService.graph.findFirst({
      where: {
        vertices: {
          every: {
            id: parentVertexId,
          },
        },
      },
    })

    if (!graph) {
      throw new Error('Graph not found')
    }

    const createdVertex = await this.prismaService.vertex.create({
      data: {
        ...vertex,
      },
    })

    await this.prismaService.graph.update({
      where: {
        id: graph.id,
      },
      data: {
        vertices: {
          connect: {
            id: createdVertex.id,
          },
        },
        edges: {
          create: {
            source: parentVertexId,
            target: createdVertex.id,
            order,
            props: vertex.props,
          },
        },
      },
    })

    return createdVertex
  }
}
