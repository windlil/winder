import useComponentsStore from '@/stores/components'
import { FC, memo, ReactNode, useEffect } from 'react'
import { useDrag } from 'react-dnd'

const MaterialItem: FC<{
  name: string
  label: string
  props: any
  icon?: ReactNode
  children?: any
}> = ({ label, icon, props, name, children }) => {
  const setDragingStatus = useComponentsStore(state => state.setDragingStatus)
  const setCurComponent = useComponentsStore(state => state.setCurComponent)
  const component = {
    name,
    props,
    children
  }

  const [{ isDragging }, drag] = useDrag({
    type: 'Component',
    item: { component },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  useEffect(() => {
    if (isDragging) setCurComponent(null)
    setDragingStatus(isDragging)
  }, [isDragging, setDragingStatus])

  return (
    <div ref={drag} className="cursor-pointer transition text-neutral-500 hover:text-primary hover:border-primary select-none border w-24 h-9 rounded-md border-dashed border-neutral-300 flex justify-center items-center">
      <span className='text-sm flex items-center gap-1'>
        <span className='icon'>
          {icon}
        </span>
        {label}
      </span>
    </div>
  )
}

export default memo(MaterialItem)