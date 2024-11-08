import { Button, List, Tag } from "antd"
import EditVariable from "./EditVariable"
import { useRef } from "react"
import useVariableStore from "@/stores/variable"
import useConfrim from "@/hooks/useConfrim"

const VariableSetting = () => {
  const dialogRef = useRef<any>(null)
  const variableList = useVariableStore(state => state.varaibleList)
  const confrim = useConfrim()

  const handleOpenDialog = () => {
    dialogRef.current?.handleOpen()
  }

  const handleDelete = (name: string) => {
    confrim({
      text: '确认删除该变量吗？',
      callback: () => {
        console.log('删除',name)
      },
      type: 'warning'
    })
  }

  const handleEdit = (item: any) => {
    dialogRef.current?.handleOpen(item)
  }

  return (
    <div className="size-full flex flex-col">
      <EditVariable ref={dialogRef}/>
      <div className="h-10 flex items-center justify-between">
        <span>变量列表</span>
        <Button type="primary" onClick={handleOpenDialog}>添加</Button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={variableList}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button danger type="link" onClick={() => handleDelete(item.name)}>删除</Button>,
                <Button type="link" onClick={() => handleEdit(item)}>编辑</Button>
              ]}
            >
              <List.Item.Meta
                title={
                  <div className="flex items-center gap-2">
                    {`${index + 1}、 变量名称：${item.name}`}
                    <Tag>{item.type}</Tag>
                  </div>
                }
                description={`描述：${item?.desc ?? '...'}`}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default VariableSetting 