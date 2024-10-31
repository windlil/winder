import FormContainer from "./components/FormContainer"
import useComponentsStore from "@/stores/components"

const Center = () => {
  const renderComponentList = useComponentsStore(state => state.renderComponentList)

  return (
    <div className="size-full flex flex-col">
      <div className="h-10 text-neutral-500">
        <span>表单设计</span>
        <span className="ml-2 text-xs">{renderComponentList.length} / 100</span>
      </div>
      <FormContainer />
    </div>
  )
}

export default Center