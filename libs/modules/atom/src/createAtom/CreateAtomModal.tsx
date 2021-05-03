import { ActionType, CrudModal, EntityType } from '@codelab/frontend/shared'
import React from 'react'
import { CreateAtomForm } from './CreateAtomForm'

export const CreateAtomModal = () => {
  return (
    <CrudModal
      modalProps={{
        className: 'create-atom-modal',
      }}
      entityType={EntityType.Atom}
      actionType={ActionType.Create}
      okText="Create atom"
      renderForm={() => <CreateAtomForm />}
    />
  )
}
