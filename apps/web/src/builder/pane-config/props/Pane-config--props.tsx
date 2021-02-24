import { Button, Divider, Space } from 'antd'
import React, { useContext } from 'react'
import { useRecoilState } from 'recoil'
import { AddChildVertexModal } from '../../../useCases/graph/addChildVertex/AddChildVertexModal'
import { addChildVertexState } from '../../../useCases/graph/addChildVertex/AddChildVertexState'
import { DeleteVertexButton } from '../../../useCases/graph/deleteVertex/DeleteVertexButton'
import { UpdateVertexForm } from '../../../useCases/graph/updateVertex/UpdateVertexForm'
import { VertexContext } from '../../../useCases/vertex/VertexProvider'
import { MoveVertexTargets } from 'apps/web/src/useCases/graph/moveVertex/MoveVertexTargets'

export const PaneConfigProps = () => {
  const vertex = useContext(VertexContext)
  const [addChildVertex, setAddChildVertex] = useRecoilState(
    addChildVertexState,
  )

  return (
    <section>
      {/* <h3>Vertex details</h3> */}
      <Space>
        <Button
          type="primary"
          onClick={() => setAddChildVertex({ visible: true })}
        >
          Add Child Node
        </Button>
        <DeleteVertexButton vertexId={vertex.id} />
      </Space>
      <Divider />
      <h3>Move Vertex</h3>
      <MoveVertexTargets sourceVertex={vertex} />
      <Divider />
      <AddChildVertexModal vertex={vertex} parentVertexId={vertex.id} />
      <UpdateVertexForm vertex={vertex} />
    </section>
  )
}