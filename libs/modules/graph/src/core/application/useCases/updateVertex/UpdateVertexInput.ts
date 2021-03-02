import { Field, InputType } from '@nestjs/graphql'
import { VertexType } from '@prisma/client'
import { MinLength, Required, Schema, getJsonSchema } from '@tsed/schema'
import { GraphQLJSONObject } from 'graphql-type-json'
import { Props } from '@codelab/antd'
import { Grid } from '@codelab/tools/generators/json-schema'
@Grid<any>({
  props: {
    'data-grid': {
      x: {
        __grid: {
          order: 1,
          span: 6,
        },
      },
      y: {
        __grid: {
          order: 2,
          span: 6,
        },
      },
      w: {
        __grid: {
          order: 3,
          span: 6,
        },
      },
      h: {
        __grid: {
          order: 4,
          span: 6,
        },
      },
    },
  },
})
@InputType()
export class UpdateVertexInput {
  @Field()
  @MinLength(3)
  @Required()
  declare vertexId: string

  @Field(() => String, { nullable: true })
  declare type?: VertexType

  @Field(() => GraphQLJSONObject, { nullable: true })
  @Schema(getJsonSchema(Props, { customKeys: true }))
  declare props?: object
}
