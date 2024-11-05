import { RenderComponentListType, RenderComponentsMap } from "@/schema"
import { createElement, ReactNode } from "react"

const render = (components: RenderComponentListType): ReactNode[] => {
  return components?.map((comp) => {
    const children = comp?.props?.children ? comp?.props?.children : render(comp?.children  ?? [])
    const component = RenderComponentsMap[comp.name]
    return createElement(component, {
      ...comp.props,
      key: comp.id
    }, children)
  })
}

export default render