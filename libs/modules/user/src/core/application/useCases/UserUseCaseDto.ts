import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserUseCaseDto {
  @Field()
  public declare id: string

  @Field()
  public declare email: string

  @Field({ nullable: true })
  public declare accessToken?: string
}