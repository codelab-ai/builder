import { Layout } from 'antd'
import React, { PropsWithChildren, useContext } from 'react'
import { useRecoilState } from 'recoil'
import { LayoutPaneVisibility, useLayout } from '../layout/layout-state'
import { AppContext, AppProvider } from '../useCases/apps/AppProvider'
import { BuilderPaneController } from './Builder-pane-controller'
import { PaneConfig } from './pane-config/Pane-config'
import { BuilderDetails } from './pane-details/Pane-details'
import { PaneMain } from './pane-main/Pane-main'
import { componentItemState } from './pane-main/component/Component-item--state'
import { BuilderTabSidebar } from './tabs-sidebar/Tabs-sidebar'
import { contentStyle } from '@codelab/frontend'

const { Sider, Content } = Layout

const tabsWidth = 40
const paneConfigWidth = 320
const defaultPaneMainWidth = 240

export const Builder = ({ children }: PropsWithChildren<{}>) => {
  const { appId, pageId } = useContext(AppContext)

  // Listen for when we're dragging over a component and hide the sidebar if we do. But don't actually
  // stop rendering the components, since the logic in them needs to run. Just visually hide them
  // This probably isn't the best place for it, but I didn't want to mess with the layout state
  // because we might refactor it to use recoil? If not - we can add a "Hidden" state, where we just hide the pane visually

  // const [{ isOver, isDragging, delta }, dropRef] = useDrop({
  //   accept: DragAndDropTypes.Component,
  //   collect: (m) => ({
  //     delta: m.getDifferenceFromInitialOffset(),
  //     isOver: m.isOver(),
  //     isDragging: !!m.getItemType(),
  //   }),
  // })

  const { setPaneVisibility } = useLayout()

  const [componentState] = useRecoilState(componentItemState)

  const paneMainWidth = componentState.isDraggingComponent
    ? 0
    : defaultPaneMainWidth

  return (
    <AppProvider appId={appId} pageId={pageId}>
      <Layout style={{ height: '100%' }}>
        <div>
          <Sider
            theme="light"
            collapsed
            collapsedWidth={tabsWidth}
            style={{ position: 'fixed', height: '100%', zIndex: 1 }}
          >
            <BuilderTabSidebar />
          </Sider>
          <BuilderPaneController
            isVisible={({ paneVisibility }) =>
              paneVisibility === LayoutPaneVisibility.Main ||
              paneVisibility === LayoutPaneVisibility.Both
            }
          >
            <Sider
              theme="light"
              width={paneMainWidth}
              style={{
                position: 'fixed',
                top: 0,
                left: tabsWidth,
                height: '100%',
                zIndex: 1,
                transition: 'width 100ms ease-in-out',
              }}
            >
              <PaneMain />
            </Sider>
          </BuilderPaneController>
        </div>
        <BuilderPaneController
          isVisible={({ paneVisibility }) =>
            paneVisibility === LayoutPaneVisibility.Detail ||
            paneVisibility === LayoutPaneVisibility.Both
          }
        >
          <Sider
            theme="light"
            width={320}
            style={{
              height: '100%',
              position: 'fixed',
              left: tabsWidth + paneMainWidth + 1,
              zIndex: 1,
            }}
          >
            <BuilderDetails />
          </Sider>
        </BuilderPaneController>
        <Layout
          onMouseDown={() => setPaneVisibility(LayoutPaneVisibility.None)}
        >
          <Content
            style={{
              ...contentStyle,
              paddingLeft: tabsWidth,
              paddingRight: paneConfigWidth,
            }}
          >
            {children}
          </Content>
        </Layout>
        <Sider
          theme="light"
          width={paneConfigWidth}
          style={{
            overflowY: 'scroll',
            position: 'fixed',
            height: '100%',
            top: 0,
            right: 0,
          }}
        >
          <PaneConfig />
        </Sider>
      </Layout>
    </AppProvider>
  )
}
