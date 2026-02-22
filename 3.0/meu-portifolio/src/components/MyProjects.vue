<template>
  <section class="projects-section">
    <h2 class="section-title"><span class="numero">04.</span>  Outros projetos notáveis</h2>
    <div style="text-align: center; margin-bottom: 2rem;">
      <a class="section-subtitle" href="https://github.com/DevTecnologirl"></a>
    </div>

    <div class="grid-container">
      <div v-for="project in projects" :key="project.title" class="card">
        <div class="card-header">
          <i class="icon-folder"><img src="../assets/folder.png" class="icon-white"></img></i>
          <div class="card-icons">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"><img src="../assets/github.png" width="26px" class="icon-white"></img></a>
            <a v-if="project.external" :href="project.external" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <ul class="tech-list">
          <li v-for="tech in project.techs" :key="tech">{{ tech }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  techs: string[]
  github?: string
  external?: string
}

const projects: Project[] = [
  {
    title: 'CARRO-SEGUIDOR-DE-LINHA',
    description: 'Código realizado para a feira semana saber fazer saber no IFF campus campos centro, onde tive que elaborar um código em arduino para a placa do arduino que controlava dois servo-motores além dos sensores de refletância.',
    techs: ['shields', 'modulos', 'robótica', 'linguagem C'],
    github: 'https://github.com/DevTecnologirl/CARRO-SEGUIDOR-DE-LINHA/blob/main/SEGUIDOR%20DE%20LINHA',
    external: '#'
  },
  {
    title: 'Bootcamp Santander Code Girls 2025',
    description: 'Aqui você vai acompanhar minha jornada no Bootcamp Santander Cibersegurança 2025, realizado pela DIO em parceria com o Santander Universidades.',
    techs: ['C#', 'Python', 'JS', 'Kotlin', 'Cibersecurity'],
    github: 'https://github.com/DevTecnologirl/code-girls-bootcamp-2025/tree/ciberseguranca-2025',
    external: '#'
  },
  {
    title: 'Agente_AI',
    description: 'Criando um agente AI personalizado para o salão elshaday',
    techs: ['Python', 'modulos', 'AI', 'Gemini'],
    github: 'https://github.com/DevTecnologirl/Agente_AI',
    external: '#'
  },
  {
    title: 'PROG_USP_PYTHON',
    description: 'Um projeto da USP - Meninas Programadoras USP',
    techs: ['Python', 'VSCODE'],
    github: 'https://github.com/DevTecnologirl/PROG_USP_PYTHON',
    external: '#'
  },
  {
    title: 'Missile_Escape',
    description: 'Projeto de jogo realizado na Unity.',
    techs: ['C#', 'Jogo'],
    github: 'https://github.com/DevTecnologirl/Missile_Escape',
    external: '#'
  },
  {
    title: 'Quiz_BitDogLab_Project',
    description: 'Este projeto explora o uso da comunicação serial (UART e I2C) e o controle de LEDs na placa BitDogLab (RP2040). Ele permite operar uma matriz 5x5 de LEDs WS2812, exibir informações em um display OLED SSD1306 e interagir com botões físicos utilizando interrupções.',
    techs: ['Robótica', 'BitDogLab', 'C', 'CMake'],
    github: 'https://github.com/DevTecnologirl/Quiz_BitDogLab_Project',
    external: '#'
  }
]
</script>

<style scoped>
.icon-white {
  filter: invert(100%) brightness(200%);
}
.numero {
  color: #baff75;
  font-family: monospace;
  font-size: 1.5rem;
}
.projects-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1rem;
  color: #cbd5e1;
}

.section-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.section-subtitle {
  text-align: center;
  color: #baff75;
  margin-bottom: 3rem;
  font-size: 1rem;
  cursor: pointer;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: #2b005c;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, background 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-5px);
  background-color: #120027;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-folder {
  font-size: 1.5rem;
  color: #baff75;
}

.card-icons a {
  margin-left: 0.75rem;
  color: #7e9567;
  font-size: 1.2rem;
  transition: color 0.2s;
}

.card-icons a:hover {
  color: #9509eb;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  color: #f8fafc;
}

.project-description {
  font-size: 0.95rem;
  color: #baff75;
  margin-bottom: 1rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #c4a7fe;
}
</style>
