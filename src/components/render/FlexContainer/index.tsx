import { Flex } from "antd"
import { useDrop } from "react-dnd";
import useComponentsStore from "@/stores/components";
import { RenderComponentsName } from "@/schema";
import { createUniid } from "@/schema/createId";

const FlexContainer = (props: any) => {
  const { children, id } = props
  const addComponent = useComponentsStore(state => state.addComponent)
  const renderChildren = () => {
    if (children && children.length) {
      return children;
    }
    return (
      <div className="w-full select-none text-neutral-400 flex justify-center items-center">
        Flex 布局
      </div>
    );
  };

  const [{ isOver }, drop] = useDrop({
    accept: 'Component',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item: any) => {
      const { component } = item
      if (component.name === RenderComponentsName['Flex']) return
      const comp = {
        id: `${createUniid()}`,
        name: component.name,
        props: component.props,
        children: component?.children
      }
      addComponent({
        ...comp,
      }, id)
    }
  })

  return (
    <Flex {...props} wrap={true} ref={drop} className={`${isOver ? 'bg-neutral-100' : ''} min-h-14 border w-full border-dashed p-1 transition mt-2`}>
      {renderChildren()}
    </Flex>
  );
};

export default FlexContainer