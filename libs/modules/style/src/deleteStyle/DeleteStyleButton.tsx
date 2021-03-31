import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useContext } from 'react'
import { useRecoilState } from 'recoil'
import { stylePaneState } from '../useStylesPane'
import { GetStylesGql, useDeleteStyleMutation } from '@codelab/generated'
import { AppContext } from '@codelab/frontend/shared'

export type DeletePageButtonProps = {
  onSuccess: () => void
}

export const DeleteStyleButton = ({ onSuccess }: DeletePageButtonProps) => {
  const { appId } = useContext(AppContext)
  const [{ selectedId }] = useRecoilState(stylePaneState)

  const [deleteStyle] = useDeleteStyleMutation({
    refetchQueries: [
      {
        query: GetStylesGql,
        variables: {
          input: {
            appId,
          },
        },
      },
    ],
  })

  if (!selectedId) {
    return null
  }

  return (
    <Button
      danger
      type="primary"
      icon={<DeleteOutlined />}
      onClick={() =>
        deleteStyle({
          variables: { input: { styleId: selectedId } },
        }).then(() => onSuccess())
      }
    />
  )
}