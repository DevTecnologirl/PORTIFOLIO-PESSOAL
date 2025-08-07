<template>
  <section class="projects-section">
    <h2 class="section-title">Other Noteworthy Projects</h2>
    <p class="section-subtitle">view the archive</p>

    <div class="grid-container">
      <div v-for="project in projects" :key="project.title" class="card">
        <div class="card-header">
          <i class="icon-folder">📁</i>
          <div class="card-icons">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer">🐙</a>
            <a v-if="project.external" :href="project.external" target="_blank" rel="noopener noreferrer">🔗</a>
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
    title: 'Integrating Algolia Search with WordPress Multisite',
    description: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
    techs: ['Algolia', 'WordPress', 'PHP'],
    github: '#',
    external: '#'
  },
  {
    title: 'Time to Have More Fun',
    description: 'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS',
    techs: ['Next.js', 'Tailwind CSS', 'Firebase'],
    github: '#',
    external: '#'
  },
  {
    title: 'Building a Headless Mobile App CMS From Scratch',
    description: 'Custom headless CMS with Node, Express, and Firebase',
    techs: ['Node', 'Express', 'Firebase', 'Vue'],
    github: '#',
    external: '#'
  },
  {
    title: 'OctoProfile',
    description: 'A nicer look at your GitHub profile and repo stats',
    techs: ['Vue', 'Tailwind CSS'],
    github: '#',
    external: '#'
  },
  {
    title: 'Google Keep Clone',
    description: 'A simple Google Keep clone built with Vue and Firebase.',
    techs: ['Vue', 'Firebase'],
    github: '#',
    external: '#'
  },
  {
    title: 'Apple Music Embeddable Web Player Widget',
    description: 'Widget para player web Apple Music que permite ouvir, buscar e navegar.',
    techs: ['Apple Music API', 'JavaScript'],
    github: '#',
    external: '#'
  }
]
</script>

<style scoped>
.projects-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1rem;
  color: #cbd5e1;
}

.section-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  color: #3affd0;
  margin-bottom: 2rem;
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
  color: #3affd0;
}

.card-icons a {
  margin-left: 0.75rem;
  color: #94a3b8;
  font-size: 1.2rem;
  transition: color 0.2s;
}

.card-icons a:hover {
  color: #3affd0;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  color: #f8fafc;
}

.project-description {
  font-size: 0.95rem;
  color: #94a3b8;
  margin-bottom: 1rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #64748b;
}
</style>
