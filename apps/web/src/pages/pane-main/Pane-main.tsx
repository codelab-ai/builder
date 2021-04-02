import React from 'react'
import { PaneMainStyle } from '@codelab/modules/style'
import { PaneMainPage } from '@codelab/modules/page'
import { BuilderPaneController, LayoutTab } from '@codelab/frontend/layout'
import { PaneMainComponent } from '@codelab/modules/component'
import { PaneMainLambda } from '@codelab/modules/lambda'
import { PaneMainTree } from '@codelab/modules/page'
import { PaneMainAtom } from '@codelab/modules/atom'

export const PaneMain = () => {
  return (
    <div
      style={{
        height: '100%',
        overflowY: 'scroll',
      }}
    >
      <BuilderPaneController
        isVisible={({ tab }) => tab === LayoutTab.Component}
      >
        <PaneMainComponent />
      </BuilderPaneController>
      <BuilderPaneController isVisible={({ tab }) => tab === LayoutTab.Page}>
        <PaneMainPage />
      </BuilderPaneController>
      <BuilderPaneController isVisible={({ tab }) => tab === LayoutTab.Tree}>
        <PaneMainTree />
      </BuilderPaneController>
      <BuilderPaneController isVisible={({ tab }) => tab === LayoutTab.Styles}>
        <PaneMainStyle />
      </BuilderPaneController>
      <BuilderPaneController
        isVisible={({ tab }) => tab === LayoutTab.Function}
      >
        <PaneMainLambda />
      </BuilderPaneController>
      <BuilderPaneController isVisible={({ tab }) => tab === LayoutTab.Atoms}>
        <PaneMainAtom />
      </BuilderPaneController>
    </div>
  )
}
