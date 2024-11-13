import { Select } from "antd"
import Code from "./components/Code"
import { useState } from "react"
import FormItem from "antd/es/form/FormItem"

const selectOptions = [
  {
    label: '接口请求',
    value: 'api',
  },
  {
    label: '静态数据',
    value: 'static',
  },
  // {
  //   label: '变量数据',
  //   value: 'variable',
  // },
]

const DataSetting = () => {
  const [option, setOption] = useState('static')

  const handleOptionChange = (v: string) => {
    setOption(v)
  }

  const renderContent = () => {
    switch(option) {
      case 'static':
        return <Code />
      case '':
        return null
    }
  }

  return (
    <div className="p-3">
      <div>
        <FormItem label={'数据来源'}>
          <Select value={option} options={selectOptions} onChange={handleOptionChange}></Select>
        </FormItem>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  )
}

export default DataSetting