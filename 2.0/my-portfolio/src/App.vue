<template>
  <q-layout view="lHh Lpr lFf" primary-color="primary">
    <!-- <SplashScreen v-if="showSplash" @finish="showSplash = false" /> -->
    <SplashScreen v-if="splashStore.showSplash" />
      <q-page-container v-else>
      <MainHeader />
       <transition name="fade" mode="out-in">
        <component :is="currentComponent" :key="navStore.currentSection" />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed } from 'vue'
import MainHeader from './components/MainHeader.vue'
import MyAbout from './components/MyAbout.vue'
import MyProjects from './components/MyProjects.vue'
import MyContact from './components/MyContact.vue'
import SplashScreen from './components/SplashScreen.vue'

import { useSplashStore } from '@/stores/splash'
import { useNavigationStore } from '@/stores/navigation'

const splashStore = useSplashStore()
const navStore = useNavigationStore()

const currentComponent = computed(() => {
  switch (navStore.currentSection) {
    case 'about':
      return MyAbout
    case 'projects':
      return MyProjects
    case 'contact':
      return MyContact
    default:
      return MyAbout
  }
})
</script>
<!-- 
<script>
import MyProjects from './components/MyProjects.vue'
import MainHeader from './components/MainHeader.vue'
import SplashScreen from './components/SplashScreen.vue'
import MyContact from './components/MyContact.vue'
import MyAbout from './components/MyAbout.vue'
import { useSplashStore } from './stores/splash'
import { useNavigationStore } from './stores/navigation'

export default {
  name: 'LayoutDefault',
  components: {
    MyProjects,
    MainHeader,
    SplashScreen,
    MyContact,
    MyAbout,
  },
  data() {
    return {
      showSplash: true,
      leftDrawerOpen: false
    }
  },
  setup() {
    const SplashStore = useSplashStore()
    return { SplashStore }
  },
}
</script> -->

<style lang="sass">
@import '~quasar/src/css/variables.sass'

body
  background-color: $primary
</style>
