import { FC } from 'react'

const MaterialItem: FC<{
  label: string
  props: any
}> = ({ label }) => {
  return (
    <div className="border w-24 h-9 rounded-md border-dashed border-neutral-300 flex justify-center items-center">
      <span className='text-sm text-neutral-500'>
        {label}
      </span>
    </div>
  )
}

export default MaterialItem