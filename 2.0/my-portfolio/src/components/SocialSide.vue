<template>
  <div class="socials-wrapper">
    <!-- Ícones sociais à esquerda -->
    <div class="socials-left">
      <a href="https://github.com/DevTecnologirl" target="_blank">
        <img src="@/assets/github.png" alt="GitHub" class="icon" />
      </a>
      <a href="https://www.instagram.com/tecnologirl/" target="_blank">
        <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
      </a>
      <a href="https://www.youtube.com/@devtecnologirl" target="_blank">
        <img src="@/assets/youtube.png" alt="YouTube" class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/camilly-duarte/" target="_blank">
        <img src="@/assets/linkedin.png" alt="LinkedIn" class="icon" />
      </a>
      <q-separator vertical class="vertical-separator" />
    </div>

    <!-- Email + separator lado a lado em coluna reversa -->
    <div class="socials-right">
        <a href="mailto:tecnologirlinformatica@gmail.com" class="email">tecnologirlinformatica@gmail.com</a>
        <q-separator vertical class="vertical-separator" />
    </div>
  </div>
</template>

<script setup>
import { QSeparator } from 'quasar'
</script>
<!-- 
<style scoped>
.socials-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 999;
}

.socials-left,
.socials-right {
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: auto;
  bottom: 10%;
}

.socials-left {
  flex-direction: column;
  left: 20px;
  gap: 1.2rem;
}

.socials-right {
  flex-direction: column-reverse; /* inverte para e-mail ficar acima da linha */
  right: 20px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.email {
  color: #ffffff;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
  text-decoration: none;
  margin-top: 1rem;
}

.email:hover {
  color: #baff75;
}

.icon {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}

/* Linha na mesma linha vertical do email */
.vertical-separator {
  height: 30vh;
  width: 1px;
  background-color: #fcffff;
  opacity: 1;
}
</style> -->

<style scoped>
.socials-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 999;
}

.socials-left,
.socials-right {
  position: absolute;
  display: flex;
  pointer-events: auto;
  bottom: -10%;
}

.socials-left {
  flex-direction: column;
  left: 20px;
  gap: 1.2rem;
}

.socials-right {
  right: 20px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.email-with-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.email {
  color: #ffffff;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
  text-decoration: none;
}

.email:hover {
    color: #f0e9e9;
    transform: scale(1.01);
}

.icon {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}

.vertical-separator {
  height: 20vh;
  width: 1px;
  background-color: #fcffff;
  opacity: 1;
}
</style>

