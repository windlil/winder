import useComponentsStore from "@/stores/components"
import Settings from "./components/Settings"
import { Menu } from "antd"
import { AppstoreOutlined } from "@ant-design/icons";
import { Workflow } from "lucide-react";
import { useMemo, useState } from "react";
import FlowSetting from "./components/FlowSetting";

const items = [
  {
    key: '1',
    icon: <AppstoreOutlined />,
    label: '属性设置',
  },
  {
    key: '2',
    icon: <div className="size-full flex justify-center items-center">
      <Workflow  className="w-4 h-4"/>
    </div>,
    label: '事件设置',
  },
]

const Right = () => {
  const curComponent = useComponentsStore(state => state.curComponent)
  const [selectKey, setSelectKey] = useState('1')
  
  const handleMenuClick = (item: any) => {
    setSelectKey(item.key)
  }

  const renderContent = useMemo(() => {
    switch(selectKey) {
      case '1':
        return curComponent && <Settings curComponent={curComponent} />
      case '2':
        return curComponent && <FlowSetting />
    }
  }, [selectKey, curComponent?.id])

  return (
    <div className="size-full overflow-auto pb-4 flex">
      <div className="flex-1">
        {renderContent}
      </div>
      <div className="w-10 pt-2 h-full border-l border-neutral-100">
        <Menu
          selectedKeys={[selectKey]}
          items={items}
          className="w-full h-full"
          style={{
            border: 0,
          }}
          inlineCollapsed={true}
          mode="inline"
          onClick={handleMenuClick}
        />
      </div>
    </div>
  )
}

export default Right