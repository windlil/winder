import FormItem from "antd/es/form/FormItem"
import { Input as AntdInput } from "antd"

const Input = (props: any) => {
  const { label, placeholder, size, disabled, required, code, id } = props

  return (
    <FormItem name={code} label={label} required={required} data-component-id={id}>
      <AntdInput disabled={disabled} placeholder={placeholder} size={size}></AntdInput>
    </FormItem>
  )
}

export default Input