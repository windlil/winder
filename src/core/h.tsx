import { RenderComponentsMap, RenderComponentListType } from "@/schema"
import useVariableStore from "@/stores/variable"
import { createElement, ReactNode } from "react"

// const container = [
//   RenderComponentsName['Flex'],
//   RenderComponentsName['Form']
// ]

const formatProps = (props: any, getVariable: any) => {
  const newProps: any = {}
  Object.keys(props).forEach((k) => {
    const v = props[k]
    if (typeof v === 'object' && v !== null) {
      if (v?.type === 'variable') {
        const variable = getVariable(v.value)
        newProps[k] = '${' + variable.name + '}'
      } else if (v?.type === 'static') {
        newProps[k] = v.value
      } else {
        newProps[k] = v
      }
    } else {
      newProps[k] = v
    }
  })
  return newProps
}

const ComponentItem = ({ item }: any) => {
  if (!item) return null
  const { name, id, children, props } = item
  const component = RenderComponentsMap[name]
  const getVaraible = useVariableStore(state => state.getVaraible)
  // return <div data-component-id={id} >
  //     {/* {!container.includes(name) && <div className="absolute top-0 left-0 bottom-0 right-0 z-10"></div>} */}
  //     {createElement(component, {
  //     key: id,
  //     id,
  //     ...props
  //   }, props?.children ? props?.children : h(children))}
  // </div>
  {/* {!container.includes(name) && <div className="absolute top-0 left-0 bottom-0 right-0 z-10"></div>} */}
  const newProps = formatProps(props, getVaraible)
  console.log('newProps:', newProps)
  return createElement(component, {
    key: id,
    id,
    ...newProps,
    'data-component-id': id
  }, newProps?.children ? newProps?.children : h(children))
}

const h = (renderComponentList: RenderComponentListType): ReactNode[] => {
  return renderComponentList?.map((comp) => {
    return <ComponentItem key={comp.id} item={comp}></ComponentItem>
  })
}

export default h

