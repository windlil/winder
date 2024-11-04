import Button from "@/components/render/Button"
import FlexContainer from "@/components/render/FlexContainer"
import Input from "@/components/render/Input"
import NumberInput from "@/components/render/NumberInput"
import PasswordInput from "@/components/render/PasswordInput"
import Textarea from "@/components/render/Textarea"
import VirtualItem from '@/components/render/VirtualItem'

import { LockOutlined, NumberOutlined } from "@ant-design/icons"
import { FileType, SquareMousePointer, TextSelect } from "lucide-react"
import { ReactNode } from "react"

// 组件
export interface RenderComponentType {
  id: string
  name: keyof typeof RenderComponentsName
  props: any
  children?: RenderComponentType[]
  parentId?: string
}

export type RenderComponentListType = RenderComponentType[]

// 存储渲染组件名称
export const RenderComponentsName = {
  Input: 'Input',
  Button: 'Button',
  Flex: 'Flex',
  NumberInput: 'NumberInput',
  PasswordInput: 'PasswordInput',
  Textarea: 'Textarea',
  VirtualItem: 'VirtualItem'
}

// 用于映射真实渲染组件
export const RenderComponentsMap = {
  [RenderComponentsName.Input]: Input,
  [RenderComponentsName.Button]: Button,
  [RenderComponentsName.Flex]: FlexContainer,
  [RenderComponentsName.NumberInput]: NumberInput,
  [RenderComponentsName.PasswordInput]: PasswordInput,
  [RenderComponentsName.Textarea]: Textarea,
  [RenderComponentsName.VirtualItem]: VirtualItem,
}

// 存储物料组件列表
export const MaterialList: {
  title: string
  children: {
    label: string
    name: string
    props: any
    compType?: 'form',
    icon?: ReactNode
    children?: any[]
  }[]
}[] = [
  {
    title: '基础',
    children: [
      {
        label: '文本框',
        name: RenderComponentsName.Input,
        compType: 'form',
        props: {
          label: '文本框',
          placeholder: '请输入内容',
          size: 'middle',
        },
        icon: <FileType />
      },
      {
        label: '数字框',
        name: RenderComponentsName.NumberInput,
        compType: 'form',
        props: {
          label: '数字框',
          placeholder: '请输入内容',
          size: 'middle',
        },
        icon: <NumberOutlined />
      },
      {
        label: '多行框',
        name: RenderComponentsName.Textarea,
        compType: 'form',
        props: {
          label: '多行框',
          placeholder: '请输入内容',
          size: 'middle',
        },
        icon: <TextSelect />
      },
      {
        label: '密码框',
        name: RenderComponentsName.PasswordInput,
        compType: 'form',
        props: {
          label: '密码框',
          placeholder: '请输入内容',
          size: 'middle',
          visibilityToggle: true
        },
        icon: <LockOutlined />
      },
      {
        label: '按钮',
        name: RenderComponentsName.Button,
        props: {
          type: 'primary',
          size: 'middle',
          children: '按钮',
        },
        icon: <SquareMousePointer />
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


export const SettingsMap = {
  [RenderComponentsName.Button]: {
    title: '属性设置',
    group: [
      {
        label: '内容',
        type: 'input',
        name: 'children',
      },
      {
        label: '类型',
        type: 'select',
        name: 'type',
        options: [
          { label: '默认', value: 'default' },
          { label: '主要', value: 'primary' },
          { label: '虚线', value: 'dashed' },
          { label: '文本', value: 'text' },
          { label: '链接', value: 'link' },
        ],
      },
      {
        label: '大小',
        type: 'select',
        name: 'size',
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
      {
        label: '危险',
        type: 'switch',
        name: 'danger',
      },
      {
        label: '禁用',
        type: 'switch',
        name: 'disabled',
      },
    ]
  },
  [RenderComponentsName.Input]: {
    title: '属性设置',
    group: [
      {
        label: '字段',
        type: 'input',
        name: 'code'
      },
      {
        label: '标题',
        type: 'input',
        name: 'label'
      },
      {
        label: '占位符',
        type: 'input',
        name: 'placeholder',
      },
      {
        label: '大小',
        type: 'select',
        name: 'size',
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
      {
        label: '是否为必填项',
        type: 'switch',
        name: 'required',
      },
      {
        label: '是否禁用',
        type: 'switch',
        name: 'disabled',
      },
    ]
  },
  [RenderComponentsName.NumberInput]: {
    title: '属性设置',
    group: [
      {
        label: '字段',
        type: 'input',
        name: 'code'
      },
      {
        label: '标题',
        type: 'input',
        name: 'label'
      },
      {
        label: '占位符',
        type: 'input',
        name: 'placeholder',
      },
      {
        label: '大小',
        type: 'select',
        name: 'size',
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
      {
        label: '是否为必填项',
        type: 'switch',
        name: 'required',
      },
      {
        label: '是否禁用',
        type: 'switch',
        name: 'disabled',
      },
    ]
  },
  [RenderComponentsName.PasswordInput]: {
    title: '属性设置',
    group: [
      {
        label: '字段',
        type: 'input',
        name: 'code'
      },
      {
        label: '标题',
        type: 'input',
        name: 'label'
      },
      {
        label: '占位符',
        type: 'input',
        name: 'placeholder',
      },
      {
        label: '大小',
        type: 'select',
        name: 'size',
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
      {
        label: '是否显示密码展示',
        type: 'switch',
        name: 'visibilityToggle'
      },
      {
        label: '是否为必填项',
        type: 'switch',
        name: 'required',
      },
      {
        label: '是否禁用',
        type: 'switch',
        name: 'disabled',
      },
    ]
  },
  [RenderComponentsName.Textarea]: {
    title: '属性设置',
    group: [
      {
        label: '字段',
        type: 'input',
        name: 'code'
      },
      {
        label: '标题',
        type: 'input',
        name: 'label'
      },
      {
        label: '占位符',
        type: 'input',
        name: 'placeholder',
      },
      {
        label: '大小',
        type: 'select',
        name: 'size',
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
      {
        label: '列数',
        type: 'number',
        name: 'columns'
      },
      {
        label: '行数',
        type: 'number',
        name: 'rows'
      },
      {
        label: '大小是否可调节',
        type: 'switch',
        name: 'resize'
      },
      {
        label: '是否为必填项',
        type: 'switch',
        name: 'required',
      },
      {
        label: '是否禁用',
        type: 'switch',
        name: 'disabled',
      },
    ]
  },
}