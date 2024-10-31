import { Flex } from "antd"
import { useDrop } from "react-dnd";
import useComponentsStore from "@/stores/components";

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
    drop: (comp: any) => {
      const { component } = comp
      addComponent(component, id)
    }
  })

  return (
    <Flex {...props} ref={drop} className={`${isOver ? 'bg-neutral-100' : ''} h-20 border border-dashed p-1 transition mt-2`}>
      {renderChildren()}
    </Flex>
  );
};

export default FlexContainer