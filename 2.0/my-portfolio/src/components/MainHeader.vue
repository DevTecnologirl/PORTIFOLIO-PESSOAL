<script setup>
import { useNavigationStore } from '@/stores/navigation';
import { useSplashStore } from '@/stores/splash'

const splashStore = useSplashStore()
const navStore = useNavigationStore()

function restartSplash() {
  splashStore.showSplash = true;
}
function goTo(section) {
  navStore.navigateTo(section);
}
</script>

<template>
  <header>
      <img src="@/assets/girl.svg" alt="Logo" class="logo" @click="restartSplash"/>
    <nav class="q-gutter-md" style="flex: 1; display: flex; justify-content: center; font-size: x-large; font-family: Poppins, sans-serif; font-weight: 600;">
       <ul>
        <li><a href="#" @click.prevent="goTo('about')">Sobre</a></li>
        <li><a href="#" @click.prevent="goTo('projects')">Projetos</a></li>
        <li><a href="#" @click.prevent="goTo('contact')">Contato</a></li>
      </ul>
    </nav>
  </header>
  
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: auto;
  background: rgba(255, 255, 255, 0.016);
  color: white;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

.logo {
  width: 160px;
  height: 140px;
  cursor: pointer;
  transition: transform 0.3s ease;
  }
  .logo:hover {
    transform: scale(1.08) rotate(4deg);
    filter: brightness(1.1) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.058));
  }

</style>
