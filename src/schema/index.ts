import Button from "@/components/render/Button"
import Input from "@/components/render/Input"

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
  Button: 'Button'
}

// 用于映射真实渲染组件
export const RenderComponentsMap = {
  [RenderComponentsName.Input]: Input,
  [RenderComponentsName.Button]: Button,
}

// 存储物料组件列表
export const MaterialList = [
  {
    title: '基础',
    children: [
      {
        label: '按钮',
        name: [RenderComponentsName.Button],
        props: {
          type: 'primary',
          size: 'normal'
        },
      },
      {
        label: '输入框',
        name: [RenderComponentsName.Input],
        props: {}
      },
    ]
  }
]