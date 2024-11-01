import { Input } from "antd"
import FormItem from "antd/es/form/FormItem"

const PasswordInput = (props: any) => {
  return <FormItem label={'密码'} {...props}>
    <Input.Password visibilityToggle={true}></Input.Password>
  </FormItem>
}

export default PasswordInput