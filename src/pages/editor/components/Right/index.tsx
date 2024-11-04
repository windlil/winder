import useComponentsStore from "@/stores/components"
import Settings from "./components/Settings"

const Right = () => {
  const curComponent = useComponentsStore(state => state.curComponent)

  return (
    <div className="p-2 px-4 size-full overflow-auto pb-28">
      <div className="flex-1">
        {curComponent && <Settings curComponent={curComponent} />}
      </div>
    </div>
  )
}

export default Right