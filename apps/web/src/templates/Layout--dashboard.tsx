import { AppProvider } from '@codelab/frontend/shared'
import styled from '@emotion/styled'
import { Layout } from 'antd'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import tw from 'twin.macro'
import { BuilderSidebarNavigation } from '../sections/BuilderSidebarNavigation'
import { WithMainPane, WithMetaPane } from './Layout.d'

const { Sider, Content } = Layout

export const tabsWidth = 40
export const mainPaneWidth = 300

const MetaPaneSection = styled('div')`
  position: absolute;
  bottom: 0;
  width: 100%;
`

export const LayoutBuilder = ({
  children,
  MainPane,
  MetaPane,
}: PropsWithChildren<WithMainPane & WithMetaPane>) => {
  const router = useRouter()

  return (
    <AppProvider appId={router.query.appId as string}>
      <Layout css={tw`h-full`}>
        <Sider
          theme="light"
          style={{ height: '100%' }}
          collapsed
          collapsedWidth={40}
        >
          <BuilderSidebarNavigation />
        </Sider>

        <Layout>
          <Layout>
            <Sider
              theme="light"
              width={mainPaneWidth}
              style={{
                overflowY: 'scroll',
                // position: 'fixed',
                height: '100%',
                top: 0,
                // right: 0,
              }}
            >
              {MainPane ? <MainPane /> : null}
            </Sider>
            <Content
              css={tw`relative`}
              style={{
                minHeight: 'initial',
              }}
            >
              {children}
              {MetaPane ? (
                <MetaPaneSection>
                  <MetaPane />
                </MetaPaneSection>
              ) : null}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </AppProvider>
  )
}
