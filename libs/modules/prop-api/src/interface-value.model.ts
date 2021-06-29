import { Injectable } from '@nestjs/common'
import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { InterfaceValue, PropValue } from './models'
import { GetPropsService } from './use-cases'

@Resolver(() => InterfaceValue)
@Injectable()
export class InterfaceValueResolver {
  constructor(private getPropsService: GetPropsService) {}

  @ResolveField('values', () => [PropValue])
  resolveValues(@Parent() parent: InterfaceValue) {
    return this.getPropsService.execute({
      byInterfaceValue: {
        interfaceValueId: parent.id,
      },
    })
  }
}