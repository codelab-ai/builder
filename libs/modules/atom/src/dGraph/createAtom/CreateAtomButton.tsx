import { PlusOutlined } from '@ant-design/icons'
import { EntityType, useCRUDModalForm } from '@codelab/frontend/shared'
import { Button } from 'antd'
import React from 'react'

export const CreateAtomButton = () => {
  const { openCreateModal } = useCRUDModalForm(EntityType.Atom)

  return (
    <Button
      size="small"
      icon={<PlusOutlined data-testid="create-atom-button" />}
      onClick={() => openCreateModal()}
    />
  )
}

export const CreateAtomButtonIcon = () => {
  const { openCreateModal } = useCRUDModalForm(EntityType.Atom)

  return (
    <Button
      size="small"
      type="primary"
      icon={<PlusOutlined />}
      onClick={() => openCreateModal()}
    />
  )
}