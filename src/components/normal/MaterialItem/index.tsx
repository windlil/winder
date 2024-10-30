import { FC, ReactNode } from 'react'

const MaterialItem: FC<{
  label: string
  props: any
  icon?: ReactNode
}> = ({ label, icon }) => {
  return (
    <div className="cursor-pointer transition text-neutral-500 hover:text-primary hover:border-primary select-none border w-24 h-9 rounded-md border-dashed border-neutral-300 flex justify-center items-center">
      <span className='text-sm flex items-center gap-1'>
        <span className='icon'>
          {icon}
        </span>
        {label}
      </span>
    </div>
  )
}

export default MaterialItem