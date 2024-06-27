import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    list: []
  }),
  actions: {
    addModal(data) {
      this.list = [...this.list, data]
    },
    removeModal(id: string) {
      this.list = this.list.filter((x) => x.id !== id)
    },
    clearAll() {
      this.list = []
    }
  }
})