import { CloseOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { useApp } from '../../useCases/apps/useApp'
import { useBuilderLayout } from '../Builder-pane--state'
import { CreatePageButton } from 'apps/web/src/useCases/pages/createPage/CreatePageButton'
import { CreatePageModal } from 'apps/web/src/useCases/pages/createPage/CreatePageModal'
import { GetPagesList } from 'apps/web/src/useCases/pages/getPages/GetPagesList'

export const PaneMainPage = () => {
  const layout = useBuilderLayout()
  const appHook = useApp()

  return (
    <>
      <Space align="baseline">
        <h2>Pages</h2>
        <CloseOutlined onClick={() => layout.setPane('none')} />
        <CreatePageButton />
      </Space>
      <GetPagesList pages={appHook.pages} appId={appHook.appId} />
      <CreatePageModal appId={appHook.appId} />
    </>
  )
}
