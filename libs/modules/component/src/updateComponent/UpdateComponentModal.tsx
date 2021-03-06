import { ActionType, CrudModal, EntityType } from '@codelab/frontend/shared'
import React from 'react'
import { UpdateComponentForm } from './UpdateComponentForm'

export const UpdateComponentModal = () => {
  return (
    <CrudModal
      modalProps={{
        className: 'update-component-modal',
      }}
      entityType={EntityType.Component}
      actionType={ActionType.Update}
      okText="Update Component"
      renderForm={() => <UpdateComponentForm />}
    />
  )
}
