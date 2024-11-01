import { RenderComponentsMap, RenderComponentListType, RenderComponentsName } from "@/schema"
import { createElement, ReactNode } from "react"

const ComponentItem = ({ item }: any) => {
  if (!item) return null
  const { name, id, children, props } = item
  const component = RenderComponentsMap[name]
  return <div data-component-id={id} className="relative flex w-full">
      {name !== RenderComponentsName['Flex'] && <div className="absolute top-0 left-0 bottom-0 right-0 z-10"></div>}
      {createElement(component, {
      key: id,
      id,
      ...props
    }, props?.children ? props?.children : h(children))}
  </div>
}

const h = (renderComponentList: RenderComponentListType): ReactNode[] => {
  return renderComponentList.map((comp) => {
    return <ComponentItem key={comp.id} item={comp}></ComponentItem>
  })
}

export default h

