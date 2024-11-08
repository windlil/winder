import { defineStore } from "./utils";

export type Varaible = {
  type: string
  value: any
  name: string
  desc?: string
}

interface Store {
  varaibleList: Varaible[]
  addVaraible: (varaible: Varaible) => void
  editVaraible: (name: string, newProps: any) => void
  getVaraible: (name: string) => Varaible | undefined
}

const useVariableStore = defineStore<Store>((set, get) => ({
  varaibleList: [],
  addVaraible(varaible) {
    set(state => {
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
  }
}))

export default useVariableStore