import { Input } from "antd"
import FormItem from "antd/es/form/FormItem"

const Textarea = (props: any) => {
  const { label, placeholder, size, disabled, required, code } = props

  return (
    <FormItem name={code} label={label} required={required}>
     <Input.TextArea disabled={disabled} placeholder={placeholder} size={size} />
    </FormItem>
  )
}

export default Textarea