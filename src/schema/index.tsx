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
    icon?: ReactNode
    children?: any[]
  }[]
}[] = [
  {
    title: '基础',
    children: [
      {
        label: '文本输入',
        name: RenderComponentsName.Input,
        props: {},
        icon: <FileType />
      },
      {
        label: '数字输入',
        name: RenderComponentsName.NumberInput,
        props: {},
        icon: <NumberOutlined />
      },
      {
        label: '多行输入',
        name: RenderComponentsName.Textarea,
        props: {},
        icon: <TextSelect />
      },
      {
        label: '密码输入',
        name: RenderComponentsName.PasswordInput,
        props: {},
        icon: <LockOutlined />
      },
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
  [RenderComponentsName.Button]: [
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
        { label: '成功', value: 'success' },
        { label: '警告', value: 'warning' },
        { label: '危险', value: 'danger' },
      ],
    },
    // {
    //   label: '点击事件',
    //   type: 'function',
    //   name: 'onClick',
    // },
    {
      label: '大小',
      type: 'select',
      name: 'size',
      options: [
        { label: '小', value: 'small' },
        { label: '中', value: 'medium' },
        { label: '大', value: 'large' },
      ],
    },
    {
      label: '禁用',
      type: 'switch',
      name: 'disabled',
    },
    // {
    //   label: 'HTML 类型',
    //   type: 'select',
    //   name: 'htmlType',
    //   options: [
    //     { label: '按钮', value: 'button' },
    //     { label: '提交', value: 'submit' },
    //     { label: '重置', value: 'reset' },
    //   ],
    // },
  ],
  [RenderComponentsName.Input]: [
    {
      label: 'code',
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
        { label: '中', value: 'medium' },
        { label: '大', value: 'large' },
      ],
    },
    {
      label: '宽度 (px)',
      type: 'number',
      name: 'width'
    },
    {
      label: '高度 (px)',
      type: 'number',
      name: 'height'
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
  ],
  [RenderComponentsName.PasswordInput]: [
    {
      label: 'code',
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
        { label: '中', value: 'medium' },
        { label: '大', value: 'large' },
      ],
    },
    {
      label: '宽度 (px)',
      type: 'number',
      name: 'width'
    },
    {
      label: '高度 (px)',
      type: 'number',
      name: 'height'
    },
    {
      label: '是否开启查看密码',
      type: 'switch',
      name: 'visibilityToggle',
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
  ],
  [RenderComponentsName.Textarea]: [
    {
      label: 'code',
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
        { label: '中', value: 'medium' },
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
  ],
}