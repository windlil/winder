import Button from "@/components/render/Button"
import FlexContainer from "@/components/render/FlexContainer"
import Input from "@/components/render/Input"
import { FileType, SquareMousePointer } from "lucide-react"
import { ReactNode } from "react"

// 组件
export interface RenderComponentType {
  id: string
  name: keyof typeof RenderComponentsName
  props: any
  children?: RenderComponentType[]
}

export type RenderComponentListType = RenderComponentType[]

// 存储渲染组件名称
export const RenderComponentsName = {
  Input: 'Input',
  Button: 'Button',
  Flex: 'Flex'
}

// 用于映射真实渲染组件
export const RenderComponentsMap = {
  [RenderComponentsName.Input]: Input,
  [RenderComponentsName.Button]: Button,
  [RenderComponentsName.Flex]: FlexContainer
}

// 存储物料组件列表
export const MaterialList: {
  title: string
  children: {
    label: string
    name: string
    props: any
    icon?: ReactNode
    children?: any[]
  }[]
}[] = [
  {
    title: '基础',
    children: [
      {
        label: '按钮',
        name: RenderComponentsName.Button,
        props: {
          type: 'primary',
          size: 'normal',
          children: '按钮',
        },
        icon: <SquareMousePointer />
      },
      {
        label: '文本',
        name: RenderComponentsName.Input,
        props: {},
        icon: <FileType />
      },
    ]
  },
  {
    title: '布局',
    children: [
      {
        label: 'Flex',
        name: RenderComponentsName.Flex,
        props: {
          gap: 10,
        },
        children: [],
      }
    ]
  }
]