import { RenderComponentListType } from "@/schema";
import { defineStore } from "./utils";

interface PreviewStore {
  renderComponents: RenderComponentListType | null
  setRenderComponents: (components: RenderComponentListType) => void
}

const usePreviewStore = defineStore<PreviewStore>((set) => ({
  renderComponents: null,
  setRenderComponents(components) {
    set((state) => {
      state.renderComponents = components
    })
  }
}))

export default usePreviewStore