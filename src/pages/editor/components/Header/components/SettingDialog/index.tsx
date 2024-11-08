import { Button, Menu, Modal } from "antd"
import { useState } from "react"
import VariableSetting from "./VariableSetting"

const items = [
  {
    key: '1',
    label: '变量配置',
  },
  {
    key: '2',
    label: '其它配置',
  },
]

const SettingDialog = () => {
  const [open, setOpen] = useState(false)

  const [selectKey, setSelectKey] = useState('1')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleMenuClick = (item: any) => {
    setSelectKey(item.key)
  }

  const renderContent = () => {
    switch(selectKey) {
      case '1':
        return <VariableSetting />
      case '2':
        return null
    }
  }

  return (
    <>
      <Button type='link' onClick={handleOpen}>全局配置</Button>
      <Modal style={{top: '8%'}} footer={null} width={'60%'} open={open} onCancel={handleClose}>
        <div className="size-full flex">
          <Menu
            selectedKeys={[selectKey]}
            items={items}
            onClick={handleMenuClick}
            style={{
              paddingRight: 20
            }}
          />
          <div className="flex-1 h-[600px] p-4">
            {renderContent()}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SettingDialog