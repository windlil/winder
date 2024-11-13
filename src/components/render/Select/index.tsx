import { Select as AntdSelect } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useMemo } from 'react'

const Select = (props: any) => {
  const { code, label, id, size, placeholder, dataBase } = props

  const options = useMemo(() => {
    console.log('dataBase:', dataBase)
    if (Array.isArray(dataBase?.value)) {
      return dataBase.value
    } else {
      return []
    }
  }, [dataBase])

  return (
    <FormItem name={code} label={label} data-component-id={id}>
      <AntdSelect options={options} size={size} placeholder={placeholder}></AntdSelect>
    </FormItem>
  )
}

export default Select