import { Input } from "antd"
import FormItem from "antd/es/form/FormItem"

const Textarea = (props: any) => {
  return <FormItem label={'长文本'} {...props}>
    <Input.TextArea></Input.TextArea>
  </FormItem>
}

export default Textarea