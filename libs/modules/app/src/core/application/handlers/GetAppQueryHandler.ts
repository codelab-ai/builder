import { Inject } from '@nestjs/common'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { fold } from 'fp-ts/Either'
import { AppDITokens } from '../../../framework/AppDITokens'
import { App } from '../../domain/app'
import { GetAppQuery } from '../queries/GetAppQuery'
import { GetAppService } from '../useCases/getApp/GetAppService'
import { Result } from '@codelab/backend'

@QueryHandler(GetAppQuery)
export class GetAppQueryHandler implements IQueryHandler<GetAppQuery> {
  constructor(
    @Inject(AppDITokens.GetAppUseCase) public readonly service: GetAppService,
  ) {}

  async execute({ request }: GetAppQuery): Promise<App> {
    const getAppResults = await this.service.execute(request)

    return fold(
      (errors) => {
        throw errors
      },
      (results: Result<App>) => results.value,
    )(getAppResults)
  }
}
