import { Injectable } from '@nestjs/common'
import { Page, VertexType } from '@prisma/client'
import { CreatePageInput } from './CreatePageInput'
import { NodeType, PrismaService, TransactionalUseCase } from '@codelab/backend'

@Injectable()
export class CreatePageService
  implements TransactionalUseCase<CreatePageInput, Page> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute({ appId, title }: CreatePageInput) {
    try {
      return await this.prismaService.page.create({
        data: {
          title,
          app: {
            connect: {
              id: appId,
            },
          },
          graphs: {
            create: {
              label: 'Layout',
              type: 'Layout',
              vertices: {
                create: [
                  {
                    type: VertexType.React_ResponsiveGridLayout,
                  },
                ],
              },
            },
          },
        },
      })
    } catch (e) {
      throw new Error(`The app with id ${appId} has not been found`)
    }
  }
}
