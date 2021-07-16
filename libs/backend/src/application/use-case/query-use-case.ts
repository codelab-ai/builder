import { FetchResult } from '@apollo/client/link/core'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { Injectable } from '@nestjs/common'
import { DocumentNode } from 'graphql'
import { GraphqlUseCase } from './graphql-use-case'

@Injectable()
/** @deprecated Use DgraphUseCase only, we're moving to use DQL instead of graphql in all places */
export abstract class QueryUseCase<
  TUseCaseRequestPort,
  TUseCaseDtoResponse,
  TQuery,
  TQueryVariables,
  TValidationContext = void,
> extends GraphqlUseCase<
  TUseCaseRequestPort,
  TUseCaseDtoResponse,
  TQuery,
  TQueryVariables,
  false,
  TValidationContext
> {
  protected isMutation(): false {
    return false
  }

  protected abstract getGql(
    request: TUseCaseRequestPort,
  ): DocumentNode | TypedDocumentNode<TQuery, TQueryVariables>

  protected abstract mapVariables(
    request: TUseCaseRequestPort,
    validationContext: TValidationContext,
  ): TQueryVariables | Promise<TQueryVariables>

  protected abstract extractDataFromResult(
    result: FetchResult<TQuery>,
    validationContext: TValidationContext,
    request: TUseCaseRequestPort,
  ): TUseCaseDtoResponse | Promise<TUseCaseDtoResponse>
}
