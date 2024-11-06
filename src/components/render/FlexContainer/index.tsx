import { Flex } from "antd"
import { useDrop } from "react-dnd";
import useComponentsStore from "@/stores/components";
import { RenderComponentsName } from "@/schema";
import { createUniid } from "@/schema/createId";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const FlexContainer = (props: any) => {
  const { children, id } = props
  const addComponent = useComponentsStore(state => state.addComponent)
  const location = useLocation()
  const [isPreview] = useState(location.pathname.includes('preview'))

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

  if (isPreview) {
    return (
      <Flex {...props} wrap={true}  className={`min-h-14 w-full p-1 mt-2`}>
        {renderChildren()}
      </Flex>
    )
  }

  const [{ isOver }, drop] = useDrop({
    accept: 'Component',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item: any, monitor) => {
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return
      }
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