import { CSSProperties } from 'react'

export type PropItem = Function & PropValue & any

export type PropType = 'eval' | 'leaf' | 'single'

// Only prop value of this type is evaluated
export interface PropValue {
  __type: PropType | Array<PropType>
  value: string
}

// This is purely object shape, not concerning React props like PropTypes
export interface Props {
  ctx?: PropItem // Made available to current function props
  [name: string]: PropItem
}

export type PropsFromKeys<Keys extends string, P extends object = {}> = {
  [K in Keys]?: string | number | boolean | PropValue | P
} & { ctx?: PropItem; style?: CSSProperties }

// Accepted value from JSON representation
export type PropJsonValue = string | number | boolean
export type PropsFactory = (
  acc: Props,
  propValue: PropItem,
  propKey: keyof Props,
) => Props

export type PropsIterator = (
  props: Props,
  iteratee: PropsFactory,
  initAccumulator?: any,
) => Props

export type PropsBuilder = (current: Props, parent: Props) => Props
