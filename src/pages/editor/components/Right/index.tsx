import useComponentsStore from "@/stores/components"
import Settings from "./components/BasicSetting"
import { Menu, message } from "antd"
import { AppstoreOutlined } from "@ant-design/icons";
import { Copy, Database, Workflow } from "lucide-react";
import { useMemo, useState } from "react";
import FlowSetting from "./components/FlowSetting/FlowSetting";
import DataSetting from "./components/DataSetting";
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
  {
    key: '3',
    icon: <div className="size-full flex justify-center items-center">
      <Database  className="w-4 h-4"/>
    </div>,
    label: '数据设置',
  },
]

const Right = () => {
  const curComponent = useComponentsStore(state => state.curComponent)
  const [selectKey, setSelectKey] = useState('1')
  
  const handleMenuClick = (item: any) => {
    setSelectKey(item.key)
  }

  const handleCopy = (v: any) => {
    if (v) {
      message.success('复制成功！')
    }
  }

  const renderContent = useMemo(() => {
    switch(selectKey) {
      case '1':
        return curComponent && <Settings curComponent={curComponent} />
      case '2':
        return curComponent && <FlowSetting />
      case '3':
        return curComponent && <DataSetting />
    }
  }, [selectKey, curComponent?.id])

  return (
    <div className="size-full overflow-auto pb-4 flex">
      <div className="flex-1">

        {curComponent && <div className="text-xs text-neutral-500 mb-2 py-3 flex justify-center border-b border-neutral-100 items-center gap-1">
          <span>
            ID: {curComponent.id}
          </span>
          <span className="cursor-pointer">
            <CopyToClipboard text={curComponent.id} onCopy={handleCopy}>
              <Copy className="w-3 h-3" />
            </CopyToClipboard>
          </span>
        </div>}
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