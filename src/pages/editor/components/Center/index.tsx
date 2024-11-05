import FormContainer from "./components/Container"
import useComponentsStore from "@/stores/components"

const Center = () => {
  const renderComponentList = useComponentsStore(state => state.renderComponentList)

  return (
    <div className="size-full flex flex-col">
      <div className="h-10 text-neutral-500">
        <span>组件数量</span>
        <span className="ml-2 text-xs">{renderComponentList.length} / 200</span>
      </div>
      <FormContainer />
    </div>
  )
}

export default Center