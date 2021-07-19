import { FetchResult } from '@apollo/client/link/core'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { Injectable } from '@nestjs/common'
import { DocumentNode } from 'graphql'
import { GraphqlUseCase } from './graphql-use-case'

@Injectable()
/** @deprecated Use DgraphUseCase only, we're moving to use DQL instead of graphql in all places */
export abstract class MutationUseCase<
  TUseCaseRequestPort,
  TUseCaseDtoResponse,
  TMutation,
  TMutationVariables,
  TValidationContext = void,
> extends GraphqlUseCase<
  TUseCaseRequestPort,
  TUseCaseDtoResponse,
  TMutation,
  TMutationVariables,
  true,
  TValidationContext
> {
  protected isMutation(): true {
    return true
  }

  protected abstract getGql(
    request: TUseCaseRequestPort,
  ): DocumentNode | TypedDocumentNode<TMutation, TMutationVariables>

  protected abstract mapVariables(
    request: TUseCaseRequestPort,
    validationContext: TValidationContext,
  ): TMutationVariables | Promise<TMutationVariables>

  protected abstract extractDataFromResult(
    result: FetchResult<TMutation>,
    validationContext: TValidationContext,
    request: TUseCaseRequestPort,
  ): TUseCaseDtoResponse | Promise<TUseCaseDtoResponse>
}
