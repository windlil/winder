import { RenderComponentListType, RenderComponentType } from "@/schema";
import { defineStore } from "./utils";

interface ComponentsStore {
  isDraging: boolean
  renderComponentList: RenderComponentListType
  curComponentId: any
  curComponent: RenderComponentType | null
  addComponent: (comp: RenderComponentType, id?: string) => void
  setCurComponent: (id: string | null) => void
  setDragingStatus: (status: boolean) => void
  removeComponent: (id: string) => void
  updateComponent: (newProps: any) => void
  move: (id: string, direction: number) => void
  copy: (id: string) => void
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
  curComponent: null,
  isDraging: false,
  addComponent(comp, id) {
    if (!id) {
      set(state => {
        state.renderComponentList.push(comp)
      })
    } else {
      set(state => {
        const parentComp = findCompById(state.renderComponentList, id)
        parentComp?.children?.push({
          ...comp,
          parentId: id
        })
      })
    }
  },
  setCurComponent(id) {
    set(state => {
      if (state.curComponentId === id) return
      state.curComponentId = id
      state.curComponent = null
      if (!id) {
        return
      }
      const comp = findCompById(state.renderComponentList, id)
      state.curComponent = comp
    })
  },
  setDragingStatus(status) {
    set(state => {
      if (state.isDraging === status) return
      state.isDraging = status
    })
  },
  removeComponent(id) {
    set(state => {
      const comp = findCompById(state.renderComponentList, id)
      if (comp?.parentId) {
        const parentComp = findCompById(state.renderComponentList, comp.parentId)
        const index = parentComp!.children?.findIndex(item => item.id === id)!
        parentComp?.children?.splice(index, 1)
      } else {
        const index = state.renderComponentList.findIndex(comp => comp.id === id)
        state.renderComponentList.splice(index, 1)
      }
    })
  },
  move(id, direction) {
    set(state => {
      const comp = findCompById(state.renderComponentList, id)
      let index: number
      let parentList: RenderComponentListType = state.renderComponentList
      if (comp?.parentId) {
        const parentComp = findCompById(state.renderComponentList, comp?.parentId)
        parentList = parentComp?.children!
        index = parentList.findIndex(item => item.id === id)!
      } else {
        index = parentList.findIndex(comp => comp.id === id)
      }

      if (index === 0 && direction === -1) {
        return
      } else if (index === parentList.length - 1 && direction === 1) {
        return
      }

      const targetIndex = index + direction
      const target = parentList[targetIndex]
      const _comp = comp!
      parentList[index] = target
      parentList[targetIndex] = _comp
    })
  },
  copy(id) {
    set(state => {
      
    })
  },
  updateComponent(newProps) {
   set(state => {
    if (!state.curComponentId) return
    const comp = findCompById(state.renderComponentList, state.curComponentId)!
    comp.props = {
      ...comp.props,
      ...newProps,
    }
   }) 
  }
}))

export default useComponentsStore