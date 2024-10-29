import { RenderComponentsMap, RenderComponentListType } from "@/schema"
import { createElement } from "react"

const h = (renderComponentList: RenderComponentListType) => {
  renderComponentList.map((comp) => {
    const { name, id, children, props } = comp
    const component = RenderComponentsMap[name]

    return createElement(component, {
      key: id,
      ...props
    }, children?.length ?? [])
  })
}

export default h