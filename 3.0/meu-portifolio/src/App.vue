<!-- <template>
  <q-layout view="lHh Lpr lFf" primary-color="primary">
    <SplashScreen v-if="splashStore.showSplash" />
      <q-page-container v-else>
      <MainHeader />
      <SocialSide />
      <MyApresentation />
       <transition name="fade" mode="out-in">
        <component :is="currentComponent" :key="navStore.currentSection" />
      </transition>
      <q-footer class="text-center">
        <div class="text-white">
          &copy; 2025 My Portfolio. @Tecnologirl ♥
        </div>
      </q-footer>
    </q-page-container>
  </q-layout>
</template> -->
<template>
  <q-layout view="lHh Lpr lFf" primary-color="primary">
    <SplashScreen v-if="splashStore.showSplash" />

    <q-page-container v-else>
      <MainHeader />

      <SocialSide />

      <section id="apresentation">
        <MyApresentation />
      </section>
<br></br>
      <section id="about">
        <MyAbout />
      </section>

      <section id="experience">
        <MyExperience />
      </section>

      <section id="study">
        <MyStudy />
      </section>

      <section id="projects">
        <MyProjects />
      </section>

      <section id="contact">
        <MyContact />
      </section>

      <q-footer class="text-center">
        <div class="text-white">
          &copy; 2025 My Portfolio. @Tecnologirl ♥
        </div>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>


<script setup>
import { computed } from 'vue'
import MainHeader from './components/MainHeader.vue'
import MyAbout from './components/MyAbout.vue'
import MyApresentation from './components/MyApresentation.vue'
import MyProjects from './components/MyProjects.vue'
import MyContact from './components/MyContact.vue'
import MyStudy from './components/MyStudy.vue'
import MyExperience from './components/MyExperience.vue'
import SplashScreen from './components/SplashScreen.vue'
import SocialSide from './components/SocialSide.vue'


import { useSplashStore } from '@/stores/splash'
import { useNavigationStore } from '@/stores/navigation'

const splashStore = useSplashStore()
const navStore = useNavigationStore()

// const currentComponent = computed(() => {
//   switch (navStore.currentSection) {
//     case 'about':
//       return MyAbout
//     case 'projects':
//       return MyProjects
//     case 'contact':
//       return MyContact
//     case 'study':
//       return MyStudy
//     case 'experience':
//       return MyExperience
//     default:
//       return MyAbout
//   }
// })
</script>

<style lang="sass">
@import 'quasar/src/css/variables.sass'

body
  background-color: $primary
</style>