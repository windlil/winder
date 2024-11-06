import { Button, Form, Input, Modal } from "antd"
import { forwardRef, useImperativeHandle, useState } from "react"

const EditVariable = forwardRef((props: any, ref: any) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  useImperativeHandle(ref, () => ({
    handleOpen
  }))

  return  (
    <Modal width={'50%'} footer={null} open={open} title='添加变量' destroyOnClose={true} onCancel={handleCancel}>
      <div className="flex flex-col">
        <div className="flex-1 p-4">
          <Form className="flex-1" labelCol={{span: 4}}>
            <Form.Item label='变量名称'>
              <Input placeholder='请输入变量名称'></Input>
            </Form.Item>
            <Form.Item label='数据'>
              <Input placeholder='请输入数据'></Input>
            </Form.Item>
          </Form>
        </div>
        <div className="h-10 flex justify-end pt-4 gap-4">
          <Button onClick={handleCancel}>取消</Button>
          <Button type="primary">确定</Button>
        </div>
      </div>
    </Modal>
  )
})

export default EditVariable