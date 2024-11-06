import { defineStore } from "./utils";

export type Varaible = {
  type: string
  value: any
  name: string
}

interface Store {
  varaibleList: Varaible[]
  addVaraible: (varaible: Varaible) => void
}

const useVariableStore = defineStore<Store>((set) => ({
  varaibleList: [],
  addVaraible(varaible) {
    set(state => {
      state.varaibleList.push(varaible)
    })
  }
}))

export default useVariableStore