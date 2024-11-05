import render from "@/core/render"
import usePreviewStore from "@/stores/preview"
import { Form } from 'antd'
import { useForm } from "antd/es/form/Form"

const PreviewPage = () => {
  const [form] = useForm()
  const renderComponents = usePreviewStore(state => state.renderComponents)
  
  const handleValuesChange = (values: any) => {
    console.log('values:', values)
  }

  const handleFinish = (values: any) => {
    console.log('values', values)
  }

  return (
    <div>
      <Form onFinish={handleFinish} form={form} onValuesChange={handleValuesChange}>
        {render(renderComponents ?? [])}
      </Form>
    </div>
  )
}

export default PreviewPage