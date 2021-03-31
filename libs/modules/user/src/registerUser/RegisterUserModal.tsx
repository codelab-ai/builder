import { ModalForm } from '@codelab/frontend/shared'
import React from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../state'
import { RegisterUserForm } from './RegisterUserForm'

export const RegisterUserModal = () => {
  const [{ loading, modalVisible }, setState] = useRecoilState(userState)

  return (
    <ModalForm
      modalProps={{
        okText: 'Register',
        okButtonProps: {
          loading,
        },
        visible: modalVisible === 'register',
        onCancel: () => setState((s) => ({ ...s, modalVisible: undefined })),
      }}
      renderForm={() => (
        <RegisterUserForm
          onSubmitSuccess={() => {
            // Close the modal when the execution finishes
            setState((s) => ({ ...s, modalVisible: undefined }))
          }}
        />
      )}
    />
  )
}