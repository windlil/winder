import { useDrop } from "react-dnd"
import useComponentsStore from "@/stores/components"
import h from "@/core/h"
import { useEffect } from "react"
import Mask from "@/components/normal/Mask"
import { createUniid } from "@/schema/createId"

const FormContainer = () => {
  const addComponent = useComponentsStore(state => state.addComponent)
  const renderComponentList = useComponentsStore(state => state.renderComponentList)
  const setCurComponent = useComponentsStore(state => state.setCurComponent)
  const curComponentId = useComponentsStore(state => state.curComponentId)

  const onDrop = ({ component }: any) => {
    const comp = {
      id: `${createUniid()}`,
      name: component.name,
      props: component.props,
      children: component?.children
    }

    addComponent(comp)
  }

  const [{ isOver }, drop] = useDrop({
    accept: 'Component',
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return
      }
      onDrop(item)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  useEffect(() => {
    const formContainer: HTMLDivElement = document.querySelector('#form-container')!
    const createMask = (e: MouseEvent) => {
      const path = e.composedPath()
      if (path.length) {
        for (let i = 0; i < path.length; i++) {
          const el = path[i] as HTMLElement
          const attribute = el?.getAttribute ? el?.getAttribute('data-component-id') : null
          if (attribute) {
            setCurComponent(attribute)
            return
          }
        }
      }
    }

    formContainer?.addEventListener('mousedown', createMask)
  }, [])

  return (
    <div ref={drop} id='form-container' className={`relative p-2 ${isOver ? 'border border-dashed border-primary-dark' : ''} 
    shadow-md size-full bg-white`}>
      {curComponentId && <Mask curComponentId={curComponentId} />}
      <div className="size-full overflow-y-auto pb-4">
        {h(renderComponentList)}
      </div>
    </div>
  )
}

export default FormContainer