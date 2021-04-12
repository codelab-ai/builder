import React, { useEffect } from 'react'
import {
  createNotificationHandler,
  EntityType,
  JsonSchemaUniForm,
  UniFormUseCaseProps,
} from '@codelab/frontend/shared'
import { DeleteLibraryInput, DeleteLibrarySchema } from './deleteLibrarySchema'
import {
  useDeleteLibraryMutation,
  GetLibrariesListGql,
  useGetLibraryQuery,
} from '@codelab/hasura'
import { useCRUDModalForm } from '@codelab/frontend/shared'
import { Spin } from 'antd'
import { AutoFields } from 'uniforms-antd'
type DeleteLibraryFormProps = UniFormUseCaseProps<DeleteLibraryInput>

export const DeleteLibraryForm = (props: DeleteLibraryFormProps) => {
  const { reset, setLoading, state } = useCRUDModalForm(EntityType.Library)
  const { id: libraryId } = state

  const [mutate, { loading: deleting }] = useDeleteLibraryMutation({
    refetchQueries: [
      {
        query: GetLibrariesListGql,
      },
    ],
  })
  useEffect(() => {
    setLoading(deleting)
  }, [deleting])

  const { data, loading } = useGetLibraryQuery({
    variables: {
      libraryId,
    },
  })

  const library = data?.library_by_pk

  if (loading) {
    return <Spin />
  }

  const onSubmit = () => {
    return mutate({
      variables: {
        libraryId,
      },
    })
  }

  return (
    <JsonSchemaUniForm<DeleteLibraryInput>
      onSubmit={onSubmit}
      schema={DeleteLibrarySchema}
      onSubmitError={createNotificationHandler({
        title: 'Error while deleting library',
      })}
      onSubmitSuccess={() => reset()}
      {...props}
    >
      <h4>Are you sure you want to delete library "{library?.name}"?</h4>
      <AutoFields />
    </JsonSchemaUniForm>
  )
}
