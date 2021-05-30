import {
  createNotificationHandler,
  EntityType,
  FormUniforms,
  UniFormUseCaseProps,
  useCRUDModalForm,
} from '@codelab/frontend/shared'
import { refetchGetAtomsQuery, useDeleteAtomMutation } from '@codelab/graphql'
import React, { useEffect } from 'react'
import { AutoFields } from 'uniforms-antd'
import { DeleteAtomInput, deleteAtomSchema } from './deleteAtomSchema'

type DeleteAtomFormProps = UniFormUseCaseProps<DeleteAtomInput>

export const DeleteAtomsForm = (props: DeleteAtomFormProps) => {
  const { reset, setLoading, state } = useCRUDModalForm(EntityType.Atom)
  const { deleteIds: atomIds, metadata } = state

  const [mutate, { loading: deleting }] = useDeleteAtomMutation({
    awaitRefetchQueries: true,
    refetchQueries: [refetchGetAtomsQuery()],
  })

  useEffect(() => {
    setLoading(deleting)
  }, [deleting])

  const onSubmit = () => {
    return mutate({
      variables: {
        input: {
          atomId: atomIds[0],
        },
      },
    })
  }

  return (
    <FormUniforms<DeleteAtomInput>
      data-testid="delete-atom-form"
      id="delete-atom-form"
      onSubmit={onSubmit}
      schema={deleteAtomSchema}
      onSubmitError={createNotificationHandler({
        title: 'Error while deleting atom',
      })}
      onSubmitSuccess={() => reset()}
      {...props}
    >
      <h4>Are you sure you want to delete atom "{metadata?.type?.label}"?</h4>
      <AutoFields />
    </FormUniforms>
  )
}
