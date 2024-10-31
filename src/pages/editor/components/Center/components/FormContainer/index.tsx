import { useDrop } from "react-dnd";
import useComponentsStore from "@/stores/components";
import h from "@/core/h";
import { nanoid } from 'nanoid'
import { useEffect } from "react";
import Mask from "@/components/normal/Mask";

const FormContainer = () => {
  const addComponent = useComponentsStore(state => state.addComponent)
  const renderComponentList = useComponentsStore(state => state.renderComponentList)
  const setCurComponent = useComponentsStore(state => state.setCurComponent)
  const curComponentId = useComponentsStore(state => state.curComponentId)

  const onDrop = ({ component }: any) => {
    const comp = {
      id: `${nanoid()}`,
      name: component.name,
      props: component.props,
      children: component?.children
    }

    addComponent(comp)
  }

  const [{ isOver }, drop] = useDrop({
    accept: 'Component',
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
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
      if (path?.length) {
        for (let i = 0; i < path.length; i++) {
          const el = path[i] as HTMLElement
          const attribute = el?.getAttribute ? el?.getAttribute('data-component-id') : null
          if (attribute) {
            setCurComponent(attribute)
            return
          }
        }
      }
      setCurComponent(null)
    }

    formContainer?.addEventListener('click', createMask)
  }, [])
  
  return (
    <div ref={drop} id='form-container' className={`relative p-2 ${isOver ? 'border border-dashed border-primary-dark' : ''} 
    shadow-md rounded-sm size-full bg-white`}>
      {curComponentId && <Mask />}
      {h(renderComponentList)}
    </div>
  )
}

export default FormContainer