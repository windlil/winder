import Button from "@/components/render/Button"
import FlexContainer from "@/components/render/FlexContainer"
import Form from "@/components/render/Form"
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
  Form: 'Form',
}

export const ContainerName = [
  RenderComponentsName.Form,
  RenderComponentsName.Flex
]

// 用于映射真实渲染组件
export const RenderComponentsMap = {
  [RenderComponentsName.Input]: Input,
  [RenderComponentsName.Input]: Input,
  [RenderComponentsName.Button]: Button,
  [RenderComponentsName.Flex]: FlexContainer,
  [RenderComponentsName.NumberInput]: NumberInput,
  [RenderComponentsName.PasswordInput]: PasswordInput,
  [RenderComponentsName.Textarea]: Textarea,
  [RenderComponentsName.Form]: Form,
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
        label: '按钮',
        name: RenderComponentsName.Button,
        props: {
          type: 'primary',
          size: 'middle',
          children: '按钮',
          htmlType: 'submit',
        },
        icon: <SquareMousePointer />
      },
    ]
  },
  {
    title: '表单',
    children: [
      {
        label: '表单容器',
        name: RenderComponentsName.Form,
        props: {
          labelSpan: 6,
          wrapperSpan: 18,
          layout: 'horizontal'
        },
        children: [],
        icon: <FileType />
      },
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
        placeholder: '请输入内容',
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
        name: 'code',
        placeholder: '请输入字段名',
      },
      {
        label: '标题',
        type: 'input',
        name: 'label',
        placeholder: '请输入标题',
      },
      {
        label: '占位符',
        type: 'input',
        name: 'placeholder',
        placeholder: '请输入占位符',
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
        name: 'code',
        placeholder: '请输入字段名',
      },
      {
        label: '标题',
        type: 'input',
        name: 'label',
        placeholder: '请输入标题',
      },
      {
        label: '占位符',
        type: 'input',
        name: 'placeholder',
        placeholder: '请输入占位符',
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
        name: 'code',
        placeholder: '请输入字段名',
      },
      {
        label: '标题',
        type: 'input',
        name: 'label',
        placeholder: '请输入标题',
      },
      {
        label: '占位符',
        type: 'input',
        name: 'placeholder',
        placeholder: '请输入占位符',
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
        name: 'code',
        placeholder: '请输入字段名',
      },
      {
        label: '标题',
        type: 'input',
        name: 'label',
        placeholder: '请输入标题',
      },
      {
        label: '占位符',
        type: 'input',
        name: 'placeholder',
        placeholder: '请输入占位符',
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
        name: 'columns',
        placeholder: '请输入列数',
      },
      {
        label: '行数',
        type: 'number',
        name: 'rows',
        placeholder: '请输入行数',
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
  [RenderComponentsName.Form]: {
    title: '属性设置',
    group: [
      {
        label: '布局',
        type: 'select',
        name: 'layout',
        options: [
          {
            label: '垂直',
            value: 'vertical',
          },
          {
            label: '水平',
            value: 'horizontal',
          },
          {
            label: '行内',
            value: 'inline',
          }
        ]
      },
      {
        label: '标签列数',
        type: 'number',
        name: 'labelSpan',
        placeholder: '请输入标签列数',
      },
      {
        label: '标签偏移',
        type: 'number',
        name: 'labelOffset',
        placeholder: '请输入标签偏移',
      },
      {
        label: '容器列数',
        type: 'number',
        name: 'wrapperSpan',
        placeholder: '请输入容器列数',
      },
      {
        label: '标签偏移',
        type: 'number',
        name: 'wrapperOffset',
        placeholder: '请输入标签偏移',
      },
    ]
  },
}