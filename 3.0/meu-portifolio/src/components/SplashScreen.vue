<template>
  <div class="splash-container">
    <transition name="fade">
      <img v-if="showLogo" src="@/assets/dev.svg" alt="Logo" class="logo" spinner-color="white"/>
    </transition>
  </div>
</template>

<script setup>
import { useSplashStore } from '@/stores/splash'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const splashStore = useSplashStore()
const showLogo = ref(true)
let timer
onMounted(() => {
  timer = setTimeout(() => {
    showLogo.value = false
    splashStore.closeSplash() 
  }, 3500) 
})
onBeforeUnmount(() => {
  clearTimeout(timer)
})

</script>

<style scoped>
.splash-container {
  height: 100vh;
  background: #5000AA;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 500px;
  animation: zoom-in 1s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  /* transition: opacity 0.8s; */
  transition: opacity 1s ease, transform 1s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

@keyframes zoom-in {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
