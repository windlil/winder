import { useMemo, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useLocation } from 'react-router-dom';
import { Form as AntdForm } from 'antd';
import { createUniid } from '@/schema/createId';
import useComponentsStore from '@/stores/components';
import { ContainerName } from '@/schema';
import styles from './index.module.less'

const Form = (props: any) => {
  const { children, id, wrapperSpan, labelSpan, wrapperOffset, labelOffset } = props;
  const location = useLocation();
  const [isPreview] = useState(location.pathname.includes('preview'));
  const addComponent = useComponentsStore(state => state.addComponent);

  const _props = useMemo(() => {
    const newProps = {
      ...props,
      labelCol: {
        span: labelSpan,
        offset: labelOffset
      },
      wrapperCol: {
        span: wrapperSpan,
        offset: wrapperOffset,
      }
    }
    delete newProps?.labelSpan
    delete newProps?.wrapperSpan
    delete newProps?.labelOffset
    delete newProps?.wrapperOffset

    return newProps
  }, [props])

  if (isPreview) {
    return <AntdForm className='w-full' name={createUniid()} {..._props}>
    {children}
  </AntdForm>
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
      const { component } = item;
      if (ContainerName.includes(component.name)) return;
      const comp = {
        id: `${createUniid()}`,
        name: component.name,
        props: component.props,
        children: component?.children,
      };
      addComponent({
        ...comp,
      }, id);
    },
  });

  const className = useMemo(() => {
    return isPreview ? 'min-h-14 p-1 mt-2' : `${isOver ? 'bg-neutral-100' : ''} flex min-h-14 border w-full border-dashed p-1 transition mt-2`;
  }, [isPreview, isOver]);

  return (
    <div className={className} ref={drop}>
      {children?.length ? <AntdForm className={styles.form} name={createUniid()} {..._props}>
        {children}
      </AntdForm> : <div className="w-full select-none text-neutral-400 flex justify-center items-center">
        表单容器
      </div>}
    </div>
  );
};

export default Form