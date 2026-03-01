<template>
  <section id="formacao" class="formacao-section">
     <div class="header-text">
          <span class="numero">03.</span>
          <h2 class="titulo">Formação</h2>
        </div>

    <div
      v-for="(curso, index) in cursos"
      :key="curso.instituicao"
      class="formacao-card"
      :class="{ 'reverse': index % 2 !== 0 }"
    >
      <!-- Imagem / Ilustração -->
      <div class="card-image">
        <div class="foto-wrapper">
          <img :src="curso.imagem" :alt="curso.titulo" />
        </div>
      </div>

      <!-- Detalhes -->
      <div class="card-content">
        <p class="featured-text">{{ curso.tipo }}</p>
        <h3 class="card-title">{{ curso.titulo }}</h3>
        <div class="card-institution">
          <p class="card-subtitle">{{ curso.instituicao }}</p>           
          <a :href="curso.linkInstituicao" target="_blank" title="Site da Instituição" style="margin-top: -20px;">🌐</a>
        </div>


        <div class="card-description">
          <p>{{ curso.descricao }}</p>
        </div>

        <ul class="skills-list">
          <a v-for="skill in curso.habilidades" :key="skill">{{ skill }}</a>
        </ul>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import tec1 from "@/assets/tec1.png";
import tec3 from "@/assets/tec3.png";
const cursos = ref([
  {
    tipo: "Técnico",
    titulo: "Técnica de Informática",
    instituicao: "Instituto Federal Fluminense - IFF",
    descricao:
      "Formação técnica voltada para desenvolvimento de sistemas, redes e manutenção de computadores.",
    habilidades: ["HTML", "CSS", "JavaScript", "Redes", "Hardware", "Manutenção de Computadores", "Banco de Dados", "Lógica de Programação", " Sistemas Embarcados"],
    imagem: tec3,
    linkCertificado: "#",
    linkInstituicao: "https://www.iff.edu.br",
  },
  {
    tipo: "Bacharelado",
    titulo: "Sistemas de Informação",
    instituicao: "Universidade Federal Fluminense - UFF",
    descricao:
      "Graduação com foco em engenharia de software, banco de dados, programação e gestão de tecnologia.",
    habilidades: ["Java", "Python", "Banco de Dados", "Engenharia de Software", "Estrutura de Dados", "Algoritmos", "Desenvolvimento Web", "Redes de Computadores"],
    imagem: tec1,
    linkCertificado: "#",
    linkInstituicao: "https://www.uff.br",
  },
]);
</script>

<style scoped>

.header-text {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-institution {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.numero {
 color: #baff75;
  font-family: monospace;
  font-size: 1.5rem;
    font-weight: 700;

}

.titulo {
  color: #f7f6f6;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}
.formacao-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1rem;
  color: #ffffff;
}

.section-index {
  color: #baff75;
  font-family: monospace;
  font-weight: 700;
  margin-right: 0.5rem;
}

.section-line {
  flex-grow: 1;
  height: 1px;
  background: #334155;
  margin-left: 1rem;
}

.formacao-card {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 4rem;
}

.formacao-card.reverse {
  flex-direction: row-reverse;
}

.card-image {
  flex: 1;
  width: 100px;
  height: 700px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
    transition: transform 0.4s ease, filter 0.4s ease;

}

.foto-wrapper {
  position: relative;
  overflow: hidden;
}

.foto-wrapper::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  border: 2px solid #baff75;
  border-radius: 4px;
  z-index: -1;
  transition: top 0.4s ease, left 0.4s ease;
}

.foto-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(186, 255, 117, 0.4);
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -2;
}

.foto-wrapper:hover img {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.foto-wrapper:hover::before {
  top: 10px;
  left: 10px;
}

.foto-wrapper:hover::after {
  opacity: 1;
}
.card-content {
  flex: 1;
}

.featured-text {
  color: #baff75;
  font-size: 0.9rem;
}

.card-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0.2rem 0;
}

.card-subtitle {
  color: #ffffff;
  margin-bottom: 1rem;
}

.card-description {
  background: #3a0185d7;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-size: 0.85rem;
  color: #f5f0f0;
  margin-bottom: 1rem;
}

.skills-list a {
  background-color: #43335515;
  padding: 0.3rem 0.7rem;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .formacao-section {
    padding: 4rem 1rem;
  }

  .titulo {
    font-size: 1.5rem;
  }

  .numero {
    font-size: 1.2rem;
  }

  .formacao-card,
  .formacao-card.reverse {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .card-image {
    width: 100%;
    height: auto;
    max-width: 200px;
  }

  .card-title {
    font-size: 1.4rem;
  }

  .card-description {
    font-size: 0.95rem;
    padding: 0.8rem;
  }

  .skills-list {
    gap: 0.5rem;
  }

  .skills-list a {
    font-size: 0.8rem;
  }
}

</style>
