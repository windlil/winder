import useComponentsStore from "@/stores/components"
import { Copy, Move, MoveDown, MoveUp, Trash2 } from "lucide-react"
import { CSSProperties, FC, useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Mask: FC<{
  curComponentId: string
}> = ({ curComponentId }) => {
  const removeComponent = useComponentsStore(state => state.removeComponent)
  const setCurComponent = useComponentsStore(state => state.setCurComponent)
  const move = useComponentsStore(state => state.move)
  const [style, setStyle] = useState<CSSProperties>({})

  const getStyle = (): CSSProperties => {
    const curComponentNode =  document.querySelector(`[data-component-id="${curComponentId}"]`)
    const offsetContainerNode = document.querySelector('#form-container')
    if (!curComponentNode || !offsetContainerNode) return {}
    const { top, left, width, height } = curComponentNode?.getBoundingClientRect()!
    const { top: offsetTop, left: offsetLeft } = offsetContainerNode.getBoundingClientRect()
    const style = window.getComputedStyle(curComponentNode)
    const marginTop = parseFloat(style.marginTop)
    const marginRight = parseFloat(style.marginRight)
    const marginBottom = parseFloat(style.marginBottom)
    const marginLeft = parseFloat(style.marginLeft)

    const totalWidth = width + marginLeft + marginRight
    const totalHeight = height + marginTop + marginBottom

    return {
      width: totalWidth,
      height: totalHeight,
      top: top - offsetTop + offsetContainerNode.scrollTop,
      left: left - offsetLeft,
    }
  }

  const handleRemove = () => {
    removeComponent(curComponentId)
    setCurComponent(null)
  }

  const handleMove = (direction: number) => {
    move(curComponentId, direction)
    setTimeout(() => {
      setStyle(getStyle())
    });
  }

  useEffect(() => {
    setStyle(getStyle())
  }, [curComponentId])

  return createPortal((
    <div
      className='absolute bg-blue-100/40 border border-blue-400 rounded-sm'
      style={style}
    >
      <div className="absolute bottom-[2px] right-[2px] flex gap-1 z-[99]">
        <div onClick={() => handleMove(-1)} className="cursor-pointer bg-primary w-5 h-5 flex justify-center items-center">
          <MoveUp className="text-white w-3 h-3" />
        </div>
        <div onClick={() => handleMove(1)} className="cursor-pointer bg-primary w-5 h-5 flex justify-center items-center">
          <MoveDown className="text-white w-3 h-3" />
        </div>
        <div className="cursor-pointer bg-primary w-5 h-5 flex justify-center items-center">
          <Copy className="text-white w-3 h-3" />
        </div>
        <div onClick={handleRemove} className="cursor-pointer bg-[#eb453b] w-5 h-5 flex justify-center items-center">
          <Trash2 className="text-white w-3 h-3" />
        </div>
      </div>
    </div>
  ), document.querySelector('#form-container') as Element)
}

export default Mask