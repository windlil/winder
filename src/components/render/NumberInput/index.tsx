import { InputNumber } from 'antd'
import FormItem from "antd/es/form/FormItem"

const NumberInput = (props: any) => {
  const { label, placeholder, size, disabled, required, code } = props

  return (
    <FormItem name={code} label={label} required={required}>
      <InputNumber className='w-full' disabled={disabled} placeholder={placeholder} size={size} />
    </FormItem>
  )
}

export default NumberInput