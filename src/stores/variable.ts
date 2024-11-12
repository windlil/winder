import { defineStore } from "./utils";

export type Varaible = {
  type: string
  value: any
  name: string
  desc?: string
}

interface Store {
  varaibleList: Varaible[]
  addVaraible: (varaible: Varaible) => any
  editVaraible: (name: string, newProps: any) => void
  getVaraible: (name: string) => Varaible | undefined
  updateVariableValue: (name: string, newValue: any) => void
}

const findSameByName = (list: Varaible[], name: string) => {
  return list.findIndex(v => v.name === name)
}

const useVariableStore = defineStore<Store>((set, get) => ({
  varaibleList: [],
  addVaraible(varaible) {
    set(state => {
      const hadSame = findSameByName(state.varaibleList, varaible.name)
      if (hadSame !== -1) {
        return
      }
      state.varaibleList.push(varaible)
    })
  },
  editVaraible(name, newProps) {
    set(state => {
      const target = state.varaibleList.find(item => item.name === name)!
      if (newProps?.desc !== undefined) {
        target.desc = newProps.desc
      }
      if (newProps?.value !== undefined) {
        target.value = newProps.value
      }
    })
  },
  getVaraible(name) {
    return get().varaibleList.find(item => item.name === name)
  },
  updateVariableValue(name, newValue) {
    set(state => {
      const target = state.varaibleList.find(v => v.name === name)

      if (!target) return

      if (target.value !== newValue) {
        target.value = newValue
      } 
    })
  }
}))

export default useVariableStore