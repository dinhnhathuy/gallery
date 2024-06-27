import { useModalStore } from "@/stores/modal.store";

export default {
  install: (app, options) => {
    app.config.globalProperties.$modal = {
      show({ component, props, id = Math.random().toString() }: any) {
        return new Promise(resolve => {
          const store = useModalStore()
          store.addModal({
            id,
            component,
            props,
            resolve
          })
        })
      },
      close(id: string) {
        const store = useModalStore()
        store.removeModal(id)
      },
      clear() {
        const store = useModalStore()
        store.clearAll()
      }
    };
  }
}