import { useDrop } from "react-dnd";
import useComponentsStore from "@/stores/components";
import h from "@/core/h";
import { nanoid } from 'nanoid'

const FormContainer = () => {
  const addComponent = useComponentsStore(state => state.addComponent)
  const renderComponentList = useComponentsStore(state => state.renderComponentList)

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
  
  return (
    <div ref={drop} className={`p-2 ${isOver ? 'border border-dashed border-primary-dark' : ''} 
    shadow-md rounded-sm size-full bg-white`}>
      {h(renderComponentList)}
    </div>
  )
}

export default FormContainer