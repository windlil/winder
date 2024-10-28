import { ReactNode, FC } from "react"

const EditorLayout: FC<{
  Header: ReactNode
  Left: ReactNode
  Center: ReactNode
  Right: ReactNode
}> = ({ Header, Left, Center, Right }) => {
  return (
    <div className="size-full flex flex-col">
      <header className="h-12 border-b border-neutral-200">
        {Header}
      </header>
      <div className="flex-1 flex">
        <div className="w-60 border-r border-neutral-200">
          {Left}
        </div>
        <div className="flex-1 bg-neutral-100 p-4">
          {Center}
        </div>
        <div className="w-60 border-l border-neutral-200">
          {Right}
        </div>
      </div>
    </div>
  )
}

export default EditorLayout