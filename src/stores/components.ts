import { RenderComponentListType, RenderComponentType } from "@/schema";
import { defineStore } from "./utils";

interface ComponentsStore {
  isDraging: boolean
  renderComponentList: RenderComponentListType
  curComponentId: any
  addComponent: (comp: RenderComponentType, id?: string) => void
  setCurComponent: (id: string | null) => void
  setDragingStatus: (status: boolean) => void
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
  curComponentId: null,
  isDraging: false,
  addComponent(comp, id) {
    if (!id) {
      set(state => {
        state.renderComponentList.push(comp)
      })
    } else {
      set(state => {
        const parentComp = findCompById(state.renderComponentList, id)
        console.log('comp:', comp)
        parentComp?.children?.push(comp)
      })
    }
  },
  setCurComponent(id) {
    set(state => {
      // const comp = findCompById(state.renderComponentList, id)!
      state.curComponentId = id
    })
  },
  setDragingStatus(status) {
    set(state => {
      if (state.isDraging === status) return
      state.isDraging = status
    })
  }
}))

export default useComponentsStore