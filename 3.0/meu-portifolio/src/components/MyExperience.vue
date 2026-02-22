<template>
  <section id="experience" class="experience-section">
    <h2>
      <span class="section-index">02.</span>
      Experiência
      <span class="section-line"></span>
    </h2>

    <div class="experience-container">
      <div class="company-list">
        <ul>
          <li
            v-for="(job, index) in jobs"
            :key="job.company"
            :class="{ active: index === activeIndex }"
            @click="activeIndex = index"
          >
            {{ job.company }}
          </li>
        </ul>
      </div>

      <div class="job-details">
        <h3>
          {{ jobs[activeIndex].title }}
          <!-- <span class="at">@{{ jobs[activeIndex].company }}</span> -->
        </h3>
        <p class="date">{{ jobs[activeIndex].date }}</p>
        <ul class="description">
          <li v-for="(point, idx) in jobs[activeIndex].points" :key="idx">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Job {
  company: string
  title: string
  date: string
  points: string[]
}

const jobs = ref<Job[]>([
  {
    company: 'Bolsista',
    title: 'Laboratório Maker - IFF',
    date: 'Set 2021 – 2023',
    points: [
      'Realizado durante meu ensino médio integrado a informática',
 'Desenvolvimento de projetos de modelagem impressões 3D, manipular scanner 3D e cortes na CNC laser',
 'para projetos internos e externos no IFF.',
      'Participação em eventos e workshops de tecnologia'
    ]
  },
  {
    company: 'Instrutora',
    title: 'Ctrl+Play - Instrutora de Programação e Robótica',
    date: 'Mar 2023 – Abr 2024',
    points: [
      'Peparar e ministrar aulas de programação: Godot, Roblox, Unity, , Scratch, Kodu.',
      'Ensinar conceitos de lógica de programação e desenvolvimento de jogos.',
      'Desenvolvimento de projetos educacionais e atividades práticas.',
      'Ensino de desenvolvimento web: ( Html5, CSS, Bootstrap, jQuery, PHP, Mysql, VScode, regexp)..',
      'Criação de ambientes de aprendizagem interativos e envolventes.',
    ]
  },
  {
    company: 'Analista de Sistemas',
    title: 'Minsait - Suporte de Service-Desk',
    date: 'Set 2023 – Mai 2024',
    points: [
      ' Suporte a impressoras. Atendimento à aplicações e ferramentas dentro do serviço.',
      ' Suporte remoto, atendimento via software de telefonia.',
      'Registro de chamado via ferramenta ITSM',
      'Manter documentada todas as atividades até o encerramento do chamado',
    ]
  },
  {
    company: 'Desenvolvedora',
    title: 'Desenvolvedora Junior',
    date: 'Mai 2024 – atual',
    points: [
      'Trabalhando com desenvolvimento de sistemas para serviços ligados aos contratos da empresa.',
      'Desenvolvimento de sistemas web e Automação utilizando tecnologias como Vue.js, Nuxt.js, YAML, C#, Node.js e Python.',
      'Implementação de APIs RESTful e integração com bancos de dados relacionais e não relacionais.',
      'Colaboração com equipes de design para criar interfaces de usuário responsivas e intuitivas.',
      'Análise e resolução de problemas técnicos em sistemas existentes.',]  }
])

const activeIndex = ref(0)
</script>

<style scoped>
.experience-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 9rem 1rem;
  color: #baff75;
}

h2 {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #f7f6f6;
}

.section-index {
  color: #baff75;
  font-family: monospace;
  font-weight: 700;
  margin-right: 0.5rem;
  font-size: 1.6rem;
}

.section-line {
  flex-grow: 1;
  height: 1px;
  background: #9a01fa98;
  margin-left: 1rem;
}

.experience-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.company-list {
  min-width: 150px;
  border-left: 2px solid #3a0185d7;
}

.company-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.company-list li {
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: #c4a7fe;
  transition: background 0.3s, color 0.3s;
  border-left: 2px solid transparent;
}

.company-list li:hover {
  background: rgba(255, 255, 255, 0.05);
}

.company-list li.active {
  color: #baff75;
  background: rgba(58, 255, 208, 0.05);
  border-left-color: #baff75;
}

.job-details {
  flex: 1;
}

.job-details h3 {
  font-size: 1.4rem;
  margin: 0;
  font-weight: 600;
}

.job-details .at {
  color: #baff75;
}

.job-details .date {
  font-size: 0.95rem;
  color: #c4a7fe;
  margin: 0.5rem 0 1rem;
}

.description {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
}

.description li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  color: #f7f6f6;
  font-family: 'Inter', sans-serif;
}

.description li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #baff75;
  font-size: 1rem;
}
</style>
