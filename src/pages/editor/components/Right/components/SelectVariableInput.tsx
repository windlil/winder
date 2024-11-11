import useVariableStore from "@/stores/variable"
import { FunctionOutlined } from "@ant-design/icons"
import { Form, Input, Modal } from "antd"
import { FC, useState } from "react"
import { Tag } from "antd"

interface Props {
  setting?: any
}

const SelectVariableInput:FC<Props> = (props) => {
  const [open, setOpen] = useState(false)
  const { setting } = props
  const varaibleList = useVariableStore(state => state.varaibleList)
  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Form.Item key={setting.name} label={`${setting.label}`} name={setting.name}>
        <Input placeholder={setting?.placeholder} addonAfter={
          <FunctionOutlined onClick={handleOpen}></FunctionOutlined>
        }></Input>
      </Form.Item>
      <Modal width={'50%'} footer={null} closable={true} onCancel={handleClose} open={open} title='选择变量'>
        <div className="w-full">
          {varaibleList?.length ? varaibleList?.map((varaiable, index) => {
            return (
              <div className="w-full flex items-center justify-between cursor-pointer transition p-2 bg-neutral-100 mb-4 hover:bg-neutral-200 rounded-md">
                <span>
                  {index + 1}、{varaiable.name}
                </span>
                <Tag>{varaiable.type}</Tag>
              </div>
            )
          }) : <div>暂未配置全局变量，请前往全局配置中进行配置</div>}
        </div>
      </Modal>      
    </>
  )
}

export default SelectVariableInput