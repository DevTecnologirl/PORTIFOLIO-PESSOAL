<template>
  <div class="splash-container">
    <transition name="fade">
      <img v-if="showLogo" src="@/assets/dev.svg" alt="Logo" class="logo" spinner-color="white"/>
    </transition>
    <!-- <button class="start-button">Start</button> -->
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

<!-- 
<script>
export default {
  name: 'SplashScreen',
  data() {
    return {
      showLogo: true
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.showLogo = false
      this.$emit('finish') 
    }, 3500)
  },
  beforeUnmount() {
clearTimeout(this.timer)
  },
  methods: {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  }
}
</script> -->

<style scoped>
.splash-container {
  height: 100vh;
  background: #6331CF; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 500px;
  animation: zoom-in 1s ease-in-out;
}

.start-button {
  background-color: white;
  color: #6331CF;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.start-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
}

.start-button:active {
  transform: scale(0.96);
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
