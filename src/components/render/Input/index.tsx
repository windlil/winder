import FormItem from "antd/es/form/FormItem"
import { Input as AntdInput } from "antd"

const Input = (props: any) => {
  return (
    <FormItem label='文本' >
      <AntdInput></AntdInput>
    </FormItem>
  )
}

export default Input