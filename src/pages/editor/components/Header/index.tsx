import { LeftOutlined, SaveOutlined, EyeOutlined } from "@ant-design/icons"
import { Button } from "antd"

const Header = () => {

  const handleOpenBackModal = () => {
  }

  return (
    <div className="px-4 size-full flex justify-between items-center">
      <div>
        <div onClick={handleOpenBackModal} className="cursor-pointer transition text-neutral-500 hover:text-black">
          <LeftOutlined />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button icon={<EyeOutlined/ >}>预览</Button>
        <Button type="primary" icon={<SaveOutlined/ >}>保存</Button>
      </div>
    </div>
  )
}

export default Header