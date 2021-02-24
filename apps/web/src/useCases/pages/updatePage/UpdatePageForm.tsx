import React from 'react'
import { ApolloForm, FormUseCaseProps, PropsWithIds } from '@codelab/frontend'
import {
  CreatePageMutationVariables,
  GetPageGql,
  UpdatePageInputSchema,
  useGetPageQuery,
  useUpdatePageMutation,
} from '@codelab/generated'
import { UpdatePageInput } from 'libs/modules/page/src/core/application/useCases/updatePage/UpdatePageInput'

export const UpdatePageForm = ({
  pageId,
  ...props
}: FormUseCaseProps<UpdatePageInput> & PropsWithIds<'pageId'>) => {
  const [mutate] = useUpdatePageMutation({
    refetchQueries: [
      {
        query: GetPageGql,
        variables: {
          input: {
            pageId,
          },
        },
      },
    ],
  })
  const { data, loading } = useGetPageQuery({
    variables: {
      input: {
        pageId,
      },
    },
  })

  const page = data?.getPage

  if (loading) {
    return null
  }

  return (
    <ApolloForm<UpdatePageInput, CreatePageMutationVariables>
      key={pageId}
      mutate={mutate}
      hideSubmitButton
      schema={UpdatePageInputSchema}
      uiSchema={{
        appId: {
          'ui:disabled': 'appId',
        },
      }}
      initialFormData={{ title: page?.title, pageId }}
      {...props}
    />
  )
}
