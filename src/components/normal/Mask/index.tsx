import useComponentsStore from "@/stores/components"
import { CSSProperties, useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Mask = () => {
  const curComponentId = useComponentsStore(state => state.curComponentId)
  const [style, setStyle] = useState<CSSProperties>({})

  const getStyle = (): CSSProperties => {
    const curComponentNode = document.querySelector(`[data-component-id="${curComponentId}"]`)
    const offsetContainerNode = document.querySelector('#form-container')
    if (!curComponentNode || !offsetContainerNode) return {}

    const { top, left, width, height } = curComponentNode.getBoundingClientRect()
    const { top: offsetTop, left: offsetLeft } = offsetContainerNode.getBoundingClientRect()

    return {
      width: width,
      height: height,
      top: top - offsetTop + offsetContainerNode.scrollTop,
      left: left - offsetLeft,
    }
  }

  useEffect(() => {
    setStyle(getStyle())
  }, [curComponentId])

  return createPortal((
    <span 
      className='absolute bg-blue-100/40 border border-blue-400 rounded-sm'
      style={style}
    />
  ), document.querySelector('#form-container') as Element)
}

export default Mask