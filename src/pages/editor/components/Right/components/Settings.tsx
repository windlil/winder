import { RenderComponentType, SettingsMap } from "@/schema"
import useComponentsStore from "@/stores/components"
import { Form, Input, Select, Switch, InputNumber, Divider } from "antd"
import styles from './index.module.less'
import { useForm } from "antd/es/form/Form"
import { FC, useEffect } from "react"

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
    curComponent.id &&  <div>
    <Divider plain>{SettingsMap[curComponent.name]?.title}</Divider>
    <Form onValuesChange={handleValuesChange} form={form} className={styles.formSettings} layout='vertical' size='small'>
      {settings?.map((setting) => {
        switch (setting.type) {
          case 'input':
            return <Form.Item key={setting.name} label={`${setting.label}:`} name={setting.name}>
              <Input placeholder={setting?.placeholder}></Input>
            </Form.Item>
          case 'select':
            return <Form.Item key={setting.name} label={`${setting.label}:`} name={setting.name}>
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