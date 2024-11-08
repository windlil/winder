import useVariableStore from "@/stores/variable"
import { Button, Form, Input, InputNumber, Modal, Select } from "antd"
import { useForm } from "antd/es/form/Form"
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react"

const defaultValues = {
  name: '',
  value: '',
  type: 'string',
}

const EditVariable = forwardRef((props: any, ref: any) => {
  const [open, setOpen] = useState(false)
  const [valueType, setValueType] = useState('string')
  const [form] = useForm()
  const addVaraible = useVariableStore(state => state.addVaraible)
  const [loading, setLoading] = useState(false)
  const [detailData, setDetailData] = useState<any>(null)
  const editVariable = useVariableStore(state => state.editVaraible)

  const handleOpen = (data?: any) => {
    if (data) {
      setDetailData(data)
    }
    setOpen(true)
  }

  const handleCancel = () => {
    setDetailData(null)
    form.resetFields()
    setOpen(false)
  }

  useImperativeHandle(ref, () => ({
    handleOpen
  }))

  const handleSelectChange = (value: string) => {
    setValueType(value)
  }

  const renderInputContent = useMemo(() => {
    switch(valueType) {
      case 'string':
        return <Input></Input>
      case 'number':
        return <InputNumber></InputNumber>
    }
  }, [valueType])

  const handleFinish = (values: any) => {
    setLoading(true)
    setTimeout(() => {
      if (!detailData) {
        addVaraible({
          name: values.name,
          type: values.type,
          value: values.value
        })
      } else {
        editVariable(detailData.name, {
          type: values.type,
          value: values.value
        })
      }
      setLoading(false)
      handleCancel()
    }, 500)
  }

  useEffect(() => {
    form.setFieldsValue(detailData ?? defaultValues)
  }, [open])

  return  (
    <Modal width={'40%'} footer={null} open={open} title={`${detailData ? '修改' : '新增'}变量`} destroyOnClose={true} onCancel={handleCancel}>
      <div className="flex flex-col">
        <div className="flex-1 p-4">
          <Form onFinish={handleFinish} form={form} className="flex-1" labelCol={{span: 4}}>
            <Form.Item name='name' label='变量名称' rules={[
              {required: true, message: '请输入变量'},
              {pattern: /^[a-zA-Z_]+$/, message: '变量为大小写英文和下划线组成'}
            ]}>
              <Input placeholder='请输入变量名称' disabled={!!detailData}></Input>
            </Form.Item>
            <Form.Item name='type' label='变量类型'>
              <Select disabled={!!detailData} onChange={handleSelectChange} options={[
                {
                  value: 'string',
                  label: '字符串',
                },
                {
                  value: 'number',
                  label: '数字',
                },
                // {
                //   value: 'object',
                //   label: '对象',
                // },
                // {
                //   value: 'array',
                //   label: '数组'
                // }
              ]}></Select>
            </Form.Item>
            <Form.Item name='value' label='数据' rules={[
              {required: true, message: '请输入数据'}
            ]}>
              {renderInputContent}
            </Form.Item>
            <Form.Item label='描述' name='desc'>
              <Input placeholder="请输入描述"></Input>
            </Form.Item>
            <Form.Item className="h-10 flex justify-end pt-4 gap-4">
              <Button onClick={handleCancel}>取消</Button>
              <Button loading={loading} type="primary" htmlType="submit">确定</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  )
})

export default EditVariable