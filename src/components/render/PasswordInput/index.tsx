import { Input } from "antd"
import FormItem from "antd/es/form/FormItem"

const PasswordInput = (props: any) => {
  const { label, placeholder, size, disabled, required, code, visibilityToggle, id } = props


  return (
    <FormItem name={code} label={label} required={required} data-component-id={id}>
     <Input.Password visibilityToggle={visibilityToggle} disabled={disabled} placeholder={placeholder} size={size} />
    </FormItem>
  )
}

export default PasswordInput