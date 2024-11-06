import { LeftOutlined, SaveOutlined, EyeOutlined } from "@ant-design/icons"
import { Button } from "antd"
import useComponentsStore from "@/stores/components"
import usePreviewStore from "@/stores/preview"
import { useNavigate } from "react-router-dom"
import SettingDialog from "./components/SettingDialog"

const Header = () => {
  const setRenderComponents = usePreviewStore(state => state.setRenderComponents)
  const renderComponentList = useComponentsStore(state => state.renderComponentList)
  const navigate = useNavigate()

  const handleOpenBackModal = () => {
  }

  const save = () => {
    setRenderComponents(renderComponentList)
  }

  const goPreview = () => {
    navigate('/preview')
  }

  return (
    <div className="px-4 size-full flex justify-between items-center">
      <div>
        <div onClick={handleOpenBackModal} className="cursor-pointer transition text-neutral-500 hover:text-black">
          <LeftOutlined />
        </div>
      </div>
      <div className="flex items-center">
        <SettingDialog />
      </div>
      <div className="flex items-center gap-3">
        <Button icon={<EyeOutlined/ >} onClick={goPreview}>预览</Button>
        <Button type="primary" icon={<SaveOutlined/ >} onClick={save}>保存</Button>
      </div>
    </div>
  )
}

export default Header