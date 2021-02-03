import { Text } from '../../text'
import { RGL } from '../RGL.types'
import { NodeReactI, NodeType } from '@codelab/alpha/shared/interface/node'

export const rglData: NodeReactI<
  Text.Props | RGL.Props | RGL.ItemProps | RGL.ResponsiveProps | { key: string }
> = {
  type: NodeType.React_Grid,
  props: {
    cols: 12,
    rowHeight: 30,
    width: 1200,
    layout: [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ],
  },
  children: [
    {
      type: NodeType.React_Html_Div,
      props: {
        key: 'a',
        style: { border: '1px solid #000', padding: 10 },
      },
      children: [
        {
          type: NodeType.React_Text,
          props: {
            value: 'A',
          },
        },
      ],
    },
    {
      type: NodeType.React_Html_Div,
      props: {
        key: 'b',
        style: { border: '1px solid #000', padding: 10 },
      },
      children: [
        {
          type: NodeType.React_Text,
          props: {
            value: 'B',
          },
        },
      ],
    },
    {
      type: NodeType.React_Html_Div,
      props: {
        key: 'c',
        style: { border: '1px solid #000', padding: 10 },
      },
      children: [
        {
          type: NodeType.React_Text,
          props: {
            value: 'C',
          },
        },
      ],
    },
  ],
}