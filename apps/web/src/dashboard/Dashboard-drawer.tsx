import { Drawer } from 'antd'
import React from 'react'
import { atom, useRecoilState } from 'recoil'
import { GetVertexDetails } from '../vertex/getVertex/GetVertexDetails'

interface DashboardDrawerState {
  visible: boolean
  vertexId?: string
}

export const dashboardDrawerState = atom<DashboardDrawerState>({
  key: 'dashboardDrawer',
  default: {
    visible: false,
    // vertexId: null,
  },
})

export const DashboardDrawer = () => {
  const [{ visible, vertexId }, setDashboardDrawer] = useRecoilState(
    dashboardDrawerState,
  )

  console.log(vertexId)

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      closable={false}
      onClose={() => setDashboardDrawer({ visible: false })}
      visible={visible}
    >
      {vertexId ? <GetVertexDetails vertexId={vertexId} /> : null}
    </Drawer>
  )
}
