<!-- <script setup>
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

</style> -->
<script setup>
import { useNavigationStore } from '@/stores/navigation';
import { useSplashStore } from '@/stores/splash';
import { useQuasar } from 'quasar'

const splashStore = useSplashStore()
const navStore = useNavigationStore()
const $q = useQuasar()

function restartSplash() {
  splashStore.showSplash = true;
}
function goTo(section) {
  navStore.navigateTo(section);
}
function toggleDarkMode() {
  $q.dark.set(!$q.dark.isActive)
}
function openCV() {
  window.open( '/cvcamilly.pdf', '_blank')
}
</script>

<template>
  <header>
    <img src="@/assets/girl.svg" alt="Logo" class="logo" @click="restartSplash" />

    <nav class="q-gutter-md nav-links">
      <ul>
        <li><a href="#" @click.prevent="goTo('about')">Sobre</a></li>
        <li><a href="#" @click.prevent="goTo('projects')">Projetos</a></li>
        <li><a href="#" @click.prevent="goTo('contact')">Contato</a></li>
      </ul>
    </nav>
    <q-btn dense flat round color="white" class="button-cv " icon="description" @click="openCV"/>
    <q-btn dense flat round icon="dark_mode" @click="toggleDarkMode" color="white" class="theme-toggle" />
  </header>
</template>

<style scoped>
.button-cv {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6331CF;
  padding: 10px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(99, 49, 207, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button-cv:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(99, 49, 207, 0.023);
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: rgba(255, 255, 255, 0.016);
  color: white;
}

.nav-links {
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: x-large;
  font-family: Poppins, sans-serif;
  font-weight: 600;
}
nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

nav li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

nav li a:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

nav li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 0%;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}

nav li a:hover::after {
  width: 100%;
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
.logo:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 0%;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
  
}


.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6331CF;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(99, 49, 207, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.theme-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(99, 49, 207, 0.4);
}
</style>
