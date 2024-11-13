import { ReactNode, FC } from "react"

const EditorLayout: FC<{
  Header: ReactNode
  Left: ReactNode
  Center: ReactNode
  Right: ReactNode
}> = ({ Header, Left, Center, Right }) => {
  return (
    <div className="size-full flex flex-col overflow-hidden">
      <header className="h-14 border-b border-neutral-200">
        {Header}
      </header>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-60 border-r border-neutral-200">
          {Left}
        </div>
        <div className="flex-1 bg-neutral-100 p-4">
          {Center}
        </div>
        <div className="w-72 h-[100vh] border-l border-neutral-200">
          {Right}
        </div>
      </div>
      <div className="h-6 border-t border-neutral-200"></div>
    </div>
  )
}

export default EditorLayout