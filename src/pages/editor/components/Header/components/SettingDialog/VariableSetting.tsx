import { Button } from "antd"
import EditVariable from "./EditVariable"
import { useRef } from "react"

const VariableSetting = () => {
  const dialogRef = useRef<any>(null)

  const handleOpenDialog = () => {
    dialogRef.current?.handleOpen()
  }

  return (
    <div className="size-full flex flex-col">
      <EditVariable ref={dialogRef}/>
      <div className="h-10 flex items-center justify-between">
        <span>变量列表</span>
        <Button type="primary" onClick={handleOpenDialog}>添加</Button>
      </div>
      <div className="flex-1 p-4">
      </div>
    </div>
  )
}

export default VariableSetting 