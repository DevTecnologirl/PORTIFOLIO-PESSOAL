import { defineStore } from 'pinia'

export const useSplashStore = defineStore('splash', {
  state: () => ({
    showSplash: true
  }),
  actions: {
    openSplash() {
      this.showSplash = true
      setTimeout(() => {
        this.showSplash = false
      }, 3000)
    },
    closeSplash() {
      this.showSplash = false
    }
  }
})
