import { Copy, MoveDown, MoveUp, Trash2 } from "lucide-react"
import FormContainer from "./components/Container"
import useComponentsStore from "@/stores/components"

const Center = () => {
  const renderComponentList = useComponentsStore(state => state.renderComponentList)
  const removeComponent = useComponentsStore(state => state.removeComponent)
  const setCurComponent = useComponentsStore(state => state.setCurComponent)
  const curComponent = useComponentsStore(state => state.curComponent)
  const move = useComponentsStore(state => state.move)
  const copy = useComponentsStore(state => state.copy)

  const handleRemove = () => {
    if (!curComponent) return
    removeComponent(curComponent.id)
    setCurComponent(null)
  }

  const handleMove = (direction: number) => {
    if (!curComponent) return
    move(curComponent?.id, direction)
  }

  const handleCopy = () => {
    copy()
  }

  return (
    <div className="size-full flex flex-col">
      <div className="h-7 w-full border-b border-neutral-100 bg-white/80 text-xs flex items-center justify-between px-4">
        <div className="text-neutral-300">
          当前组件数量：{renderComponentList.length}
        </div>
        <div className="flex gap-1">
          <div onClick={() => handleMove(-1)} className="rounded-sm cursor-pointer bg-neutral-100  w-5 h-5 flex justify-center items-center">
            <MoveUp className="text-neutral-400 w-3 h-3" />
          </div>
          <div onClick={() => handleMove(1)} className="rounded-sm cursor-pointer bg-neutral-100 w-5 h-5 flex justify-center items-center">
            <MoveDown className="text-neutral-400 w-3 h-3" />
          </div>
          <div onClick={handleCopy} className="rounded-smcursor-pointer bg-neutral-100 w-5 h-5 flex justify-center items-center">
            <Copy className="text-neutral-400 w-3 h-3" />
          </div>
          <div onClick={handleRemove} className="cursor-pointer bg-neutral-100 w-5 h-5 flex justify-center items-center">
            <Trash2 className="text-neutral-400 w-3 h-3" />
          </div>
        </div>
      </div>
      <FormContainer />
    </div>
  )
}

export default Center