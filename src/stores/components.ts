import { RenderComponentListType, RenderComponentType } from "@/schema";
import { defineStore } from "./utils";

interface ComponentsStore {
  renderComponentList: RenderComponentListType
  curComponent: RenderComponentType | null
  addComponent: (comp: RenderComponentType) => void
  setCurComponent: (id: string) => void
}

const findCompById = (list: RenderComponentListType, id: string): RenderComponentType | null => {
  for (let i = 0; i < list.length; i++) {
    const comp = list[i]
    if (comp.id === id) {
      return comp
    } else if (comp.children?.length) {
      const target = findCompById(comp.children, id)
      if (target) return target
    }
  }
  return null
}

const useComponentsStore = defineStore<ComponentsStore>((set) => ({
  renderComponentList: [],
  curComponent: null,

  addComponent(comp) {
    set(state => {
      state.renderComponentList.push(comp)
    })
  },
  setCurComponent(id) {

  }
}))

export default useComponentsStore