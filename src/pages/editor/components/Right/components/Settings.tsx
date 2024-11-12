import { RenderComponentType, SettingsMap } from "@/schema"
import useComponentsStore from "@/stores/components"
import { Form, Select, Switch, InputNumber } from "antd"
import styles from './index.module.less'
import { useForm } from "antd/es/form/Form"
import { FC, useEffect } from "react"
import { SettingOutlined } from "@ant-design/icons"
import SelectVariableInput from "./SelectVariableInput"

const renderSettings: FC<{
  curComponent: RenderComponentType
}> = ({ curComponent }) => {
  const updateComponent = useComponentsStore(state => state.updateComponent)
  const [form] = useForm()
  const settings = SettingsMap[curComponent.name]?.group

  const handleValuesChange = (values: any) => {
    updateComponent(values)
  }

  useEffect(() => {
    form && form.setFieldsValue(curComponent.props)
  }, [form, curComponent])

  return (
    curComponent.id &&  <div className="p-3">
    <div className="text-sm mb-4 py-2 flex items-center gap-1">
      <SettingOutlined />
      {SettingsMap[curComponent.name]?.title}
    </div>
    <Form onValuesChange={handleValuesChange} form={form} className={styles.formSettings} layout='vertical' size='small'>
      {settings?.map((setting) => {
        switch (setting.type) {
          case 'input':
            return <Form.Item key={setting.name} label={setting.label} name={setting.name}>
              <SelectVariableInput key={setting.name}></SelectVariableInput>
            </Form.Item>
          case 'select':
            return <Form.Item key={setting.name} label={`${setting.label}`} name={setting.name}>
              <Select options={setting.options}></Select>
            </Form.Item>
          case 'switch':
            return <Form.Item key={setting.name} label={`${setting.label}`} name={setting.name}>
              <Switch></Switch>
            </Form.Item>
          case 'number':
            return <Form.Item key={setting.name} label={`${setting.label}`} name={setting.name}>
              <InputNumber placeholder={setting?.placeholder} className='w-full'></InputNumber>
            </Form.Item>
          default:
            return null
          }
        })
      }
    </Form>
  </div>
  )
}

export default renderSettings