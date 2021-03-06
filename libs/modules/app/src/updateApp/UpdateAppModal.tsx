import { ActionType, CrudModal, EntityType } from '@codelab/frontend/shared'
import React from 'react'
import { UpdateAppForm } from './UpdateAppForm'

export const UpdateAppModal = () => {
  return (
    <CrudModal
      entityType={EntityType.App}
      actionType={ActionType.Update}
      okText="Update App"
      renderForm={() => <UpdateAppForm />}
    />
  )
}
