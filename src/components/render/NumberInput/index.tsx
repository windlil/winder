import { InputNumber } from 'antd'
import FormItem from "antd/es/form/FormItem"

const NumberInput = (props: any) => {
  const { label, placeholder, size, disabled, required, code, id } = props

  return (
    <FormItem name={code} label={label} required={required} data-component-id={id}>
      <InputNumber className='w-full' disabled={disabled} placeholder={placeholder} size={size} />
    </FormItem>
  )
}

export default NumberInput