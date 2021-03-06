import { EditorProvider } from '@codelab/frontend/builder'
import { ComponentProvider, LibraryProvider } from '@codelab/frontend/shared'
import { useRouter } from 'next/router'
import React from 'react'
import { DashboardLayout } from './DashboardLayout'
import { LayoutComponent } from './Layout.d'

export const LayoutLibrary: LayoutComponent<'builder'> = (props) => {
  const { children, MainPane } = props
  const { query } = useRouter()
  const componentId = query?.componentId as string

  return (
    <LibraryProvider>
      <ComponentProvider componentId={componentId}>
        <EditorProvider>
          <DashboardLayout MainPane={MainPane} SidebarNavigation={() => <></>}>
            {children}
          </DashboardLayout>
        </EditorProvider>
      </ComponentProvider>
    </LibraryProvider>
  )
}
