import useComponentsStore from "@/stores/components"
import { Move, Trash2 } from "lucide-react"
import { CSSProperties, useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Mask = () => {
  const curComponentId = useComponentsStore(state => state.curComponentId)
  const [style, setStyle] = useState<CSSProperties>({})

  const getStyle = (): CSSProperties => {
    const curComponentNode =  document.querySelector(`[data-component-id="${curComponentId}"]`)
    const offsetContainerNode = document.querySelector('#form-container')
    if (!curComponentNode || !offsetContainerNode) return {}
    console.log('curComponentNode',curComponentNode, curComponentId)
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

  useEffect(() => {
    setStyle(getStyle())
  }, [curComponentId])

  return createPortal((
    <div
      className='absolute bg-blue-100/40 border border-blue-400 rounded-sm'
      style={style}
    >
      <span className="absolute transition z-[99] top-0 cursor-move left-0 bg-primary w-5 h-5 flex justify-center items-center">
        <Move className="text-white size-full w-3 h-3" />
      </span>
      <div className="rounded-md absolute bottom-1 cursor-pointer right-1 bg-[#eb453b] w-5 h-5 flex justify-center items-center">
        <Trash2 className="text-white w-3 h-3" />
      </div>
    </div>
  ), document.querySelector('#form-container') as Element)
}

export default Mask