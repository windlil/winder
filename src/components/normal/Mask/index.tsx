import useComponentsStore from "@/stores/components"
import { CSSProperties, FC, useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"

const Mask: FC<{
  curComponentId: string
}> = ({ curComponentId }) => {
  const [style, setStyle] = useState<CSSProperties>({})
  const curComponent = useComponentsStore(state => state.curComponent)
  const renderComponentList = useComponentsStore(state => state.renderComponentList)

  const getStyle = (): CSSProperties => {
    const curComponentNode =  document.querySelector(`[data-component-id="${curComponentId}"]`)
    const offsetContainerNode = document.querySelector('#form-container')
    if (!curComponentNode || !offsetContainerNode) return {}
    const { top, left, width, height } = curComponentNode?.getBoundingClientRect()!
    const { top: offsetTop, left: offsetLeft } = offsetContainerNode.getBoundingClientRect()
    // const style = window.getComputedStyle(curComponentNode)
    // const marginTop = parseFloat(style.marginTop)
    // const marginRight = parseFloat(style.marginRight)
    // const marginBottom = parseFloat(style.marginBottom)
    // const marginLeft = parseFloat(style.marginLeft)

    const totalWidth = width
    const totalHeight = height

    return {
      width: totalWidth,
      height: totalHeight,
      top: top - offsetTop + offsetContainerNode.scrollTop,
      left: left - offsetLeft,
    }
  }

  useEffect(() => {
    setStyle(getStyle)
  }, [curComponent, renderComponentList])

  return createPortal((
    <div
      className='absolute bg-blue-100/40 border border-blue-400 rounded-sm'
      style={style}
    >
    </div>
  ), document.querySelector('#form-container') as Element)
}

export default Mask