import useVariableStore from "@/stores/variable"
import { FunctionOutlined } from "@ant-design/icons"
import { Button, Input, Modal } from "antd"
import { FC, useState } from "react"
import { Tag } from "antd"


const SelectVariableInput:FC = (props: any) => {
  const [open, setOpen] = useState(false)
  const { value, onChange } = props
  const varaibleList = useVariableStore(state => state.varaibleList)
  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleValueChange = (e: any) => {
    onChange && onChange({
      type: 'static',
      value: e?.target?.value,
    })
  }

  const selectVariable = (varaiable: any) => {
    onChange && onChange({
      type: 'variable',
      value: varaiable.name
    })
    handleClose()
  }

  const getValue = () => {
    if (value?.type === 'static') {
      return value.value
    } else if (value?.type === 'variable') {
      return '${' + value.value + '}'
    } else {
      return value
    }
  }

  return (
    <>
      <div>
        <Input
          disabled={value?.type === 'variable'}
          onChange={handleValueChange}
          addonAfter={
            <FunctionOutlined onClick={handleOpen}/>
          }
          value={getValue()}
        />
        <Modal width={'50%'} footer={null} closable={true} onCancel={handleClose} open={open} title={
          <div className="flex items-center gap-2">
            <span>选择变量</span>
            {varaibleList?.length ?  <Button>使用常量</Button> : null}
          </div>
        }>
          <div className="w-full">
            {varaibleList?.length ? varaibleList?.map((varaiable, index) => {
              return (
                <div onClick={() => selectVariable(varaiable)} className="w-full flex items-center justify-between cursor-pointer transition p-2 bg-neutral-100 mb-4 hover:bg-neutral-200 rounded-md">
                  <span>
                    {index + 1}、{varaiable.name}
                  </span>
                  <Tag>{varaiable.type}</Tag>
                </div>
              )
            }) : <div>暂未配置全局变量，请前往全局配置中进行配置</div>}
          </div>
        </Modal>
      </div>    
    </>
  )
}

export default SelectVariableInput