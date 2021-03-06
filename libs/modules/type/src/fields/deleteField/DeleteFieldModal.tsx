import { ActionType, CrudModal, EntityType } from '@codelab/frontend/shared'
import React from 'react'
import { DeleteFieldForm } from './DeleteFieldForm'

export const DeleteFieldModal = () => {
  return (
    <CrudModal
      entityType={EntityType.Field}
      actionType={ActionType.Delete}
      okText="Delete"
      renderForm={() => <DeleteFieldForm />}
    />
  )
}

DeleteFieldModal.displayName = 'DeleteFieldModal'
