import Settings from "./components/Settings"
import { SettingOutlined } from "@ant-design/icons"

const Right = () => {
  return (
    <div className="p-2 px-4 size-full overflow-auto pb-28">
      <div className="h-10 text-neutral-500 border-neutral-200 font-bold text-sm border-b flex items-center gap-2">
        <SettingOutlined />
        <span>设置</span>
      </div>
      <div className="mt-4 flex-1">
        <Settings />
      </div>
    </div>
  )
}

export default Right