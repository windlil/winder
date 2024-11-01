import { InputNumber } from 'antd'
import FormItem from "antd/es/form/FormItem"

const NumberInput = (props: any) => {
  return (
    <FormItem label={'数字'} {...props}>
      <InputNumber className='w-full' />
    </FormItem>
  )
}

export default NumberInput