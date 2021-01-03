import React from 'react'
import { spinData } from './Spin.data'
import { Renderer } from '@codelab/core/renderer'

export default {
  title: 'Spin',
  parameters: {
    data: {
      Default: spinData,
    },
  },
}

export const Default = () => {
  const Spin = Renderer.components(spinData)

  return <Spin />
}