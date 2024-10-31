import { RenderComponentsMap, RenderComponentListType } from "@/schema"
import { createElement, ReactNode } from "react"

const h = (renderComponentList: RenderComponentListType): ReactNode[] => {
  return renderComponentList.map((comp) => {
    const { name, id, children, props } = comp
    const component = RenderComponentsMap[name]
    return createElement(component, {
      key: id,
      id,
      'data-component-id': id,
      ...props
    }, props?.children ? props?.children : h(children ?? []))
  })
}

export default h

