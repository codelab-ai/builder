import { DgraphApp } from '@codelab/backend'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { z } from 'zod'

@ObjectType()
export class App {
  @Field(() => ID)
  declare id: string

  /** The id of the user that owns this App, taken from auth0 */
  @Field()
  declare ownerId: string

  @Field()
  declare name: string

  constructor(id: string, ownerId: string, name: string) {
    this.id = id
    this.ownerId = ownerId
    this.name = name
  }

  static fromDgraph({ ownerId, name, uid }: DgraphApp) {
    return new App(uid, ownerId, name)
  }
}

export const appSchema = z.object({
  id: z.string(),
  ownerId: z.string(),
  name: z.string(),
})
