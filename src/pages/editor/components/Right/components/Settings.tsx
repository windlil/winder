import { SettingsMap } from "@/schema"
import useComponentsStore from "@/stores/components"
import { Form, Input, Select, Switch, InputNumber } from "antd"
import styles from './index.module.less'

const renderSettings = () => {
  const curComponent = useComponentsStore(state => state.curComponent)

  if (!curComponent) return null

  const settings = SettingsMap[curComponent.name]

  if (!settings) {
    return null
  }

  return (
    <Form className={styles.formSettings} layout='vertical' size='small'>
      {settings.map((setting) => {
        switch (setting.type) {
          case 'input':
            return <Form.Item key={setting.name} label={`${setting.label}:`} name={setting.name}>
              <Input defaultValue={curComponent.props?.children}></Input>
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
              <InputNumber className='w-full'></InputNumber>
            </Form.Item>
          default:
            return null
          }
        })
      }
    </Form>
  )
}

export default renderSettings