import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    currentSection: 'about'
  }),
  actions: {
    navigateTo(section) {
      this.currentSection = section
    }
  }
})
