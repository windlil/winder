import FormItem from "antd/es/form/FormItem"
import { Input as AntdInput } from "antd"

const Input = (props: any) => {
  const { label, placeholder, size, disabled, required, code } = props

  return (
    <FormItem name={code} label={label} required={required}>
      <AntdInput disabled={disabled} placeholder={placeholder} size={size}></AntdInput>
    </FormItem>
  )
}

export default Input