
<script setup>
import { ref } from 'vue'
import { useNavigationStore } from '@/stores/navigation';
import { useSplashStore } from '@/stores/splash';
import { useQuasar } from 'quasar'

const splashStore = useSplashStore()
const navStore = useNavigationStore()
const $q = useQuasar()

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

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
function scrollTo(sectionId) {
  leftDrawerOpen.value = false
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header>
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      class="menu-toggle"
      @click="toggleLeftDrawer"
    />

    <img src="@/assets/girl.svg" alt="Logo" class="logo" @click="restartSplash" />

    <nav class="q-gutter-md nav-links desktop-only">
  <ul>
    <li><a href="#" @click="scrollTo('about')"><span class="nav-index">01.</span> Sobre</a></li>
    <li><a href="#" @click="scrollTo('experience')"><span class="nav-index">02.</span> Experiência</a></li>
    <li><a href="#" @click="scrollTo('study')"><span class="nav-index">03.</span> Formação</a></li>
    <li><a href="#" @click="scrollTo('projects')"><span class="nav-index">04.</span> Projetos</a></li>
    <li><a href="#" @click="scrollTo('contact')"><span class="nav-index">05.</span> Contato</a></li>
  </ul>
</nav>
<div class="button-container">
  <q-btn dense flat round color="white" class="button-cv " icon="description" @click="openCV"/>
</div>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      class="mobile-menu"
    >
      <q-list class="mobile-menu">
        <q-item-label header class="menu-header">
          <q-btn flat round dense icon="close" @click="toggleLeftDrawer" color="white" />
        </q-item-label>
        
        <q-item clickable @click="scrollTo('about')">
          <q-item-section><span class="nav-index">01.</span> Sobre</q-item-section>
        </q-item>
        <q-item clickable @click="scrollTo('experience')">
          <q-item-section><span class="nav-index">02.</span> Experiência</q-item-section>
        </q-item>
        <q-item clickable @click="scrollTo('study')">
          <q-item-section><span class="nav-index">03.</span> Formação</q-item-section>
        </q-item>
        <q-item clickable @click="scrollTo('projects')">
          <q-item-section><span class="nav-index">04.</span> Projetos</q-item-section>
        </q-item>
        <q-item clickable @click="scrollTo('contact')">
          <q-item-section><span class="nav-index">05.</span> Contato</q-item-section>
        </q-item>
        
        <q-item>
          <q-btn dense flat round color="white" class="button-cv" icon="description" @click="openCV" label="" />
        </q-item>
      </q-list>
    </q-drawer>
  </header>
</template>

<style scoped>

.menu-toggle {
  display: none;
  color: white;
  font-size: 1.5rem;
}

.desktop-only {
  display: flex;
}

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
.button-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 60px;
}
header {
   position:inherit;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  4rem;
  height: 80px;
  background: #20004491;
  backdrop-filter: blur(10px); 
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.nav-links {
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

.nav-links ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  padding: 0;
  margin: 0;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.1rem;
  position: relative;
}

.nav-links li a:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.nav-index {
  color: #baff75;
  font-weight: bold;
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

.mobile-menu {
  background-color: #200044;
  padding: 1rem;
}

.mobile-menu .q-item {
  color: #fafafa;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.mobile-menu .nav-index {
  color: #baff75;
  margin-right: 0.5rem;
}

.menu-header {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    margin-left: 0.5rem;
  }

  .desktop-only {
    display: none;
  }

  header {
    padding: 1rem;
    height: 70px;
  }

  .logo {
    width: 100px;
    height: 80px;
  }

  .button-container {
    margin-right: 0;
  }
}
</style>
