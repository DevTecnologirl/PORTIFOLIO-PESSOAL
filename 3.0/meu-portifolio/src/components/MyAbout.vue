<template>
  <section id="sobre" class="sobre-container">
    <div class="conteudo">
      <div class="texto">
        <div class="header-text">
          <span class="numero">01.</span>
          <h2 class="titulo">Sobre Mim</h2>
        </div>
        <p>
          Olá! Aqui é a <strong>@Tecnologirl</strong> e também sou <strong>Camilly Duarte</strong> uma <strong>Desenvolvedora Fullstack</strong> apaixonada por criar soluções digitais modernas e funcionais.
          Minha jornada no desenvolvimento começou no ensino médio técnico pelo IFF onde tive oportunidade também em ser bolsista de um laboratório Maker.
        </p>
        <p>
          Trabalho na criação de aplicações completas, unindo design intuitivo com código escalável e de alta performance.
          Acredito que a combinação entre back-end sólido e front-end envolvente é o caminho para produtos de sucesso.
        </p>
        <p>
          Aqui estão algumas tecnologias que tenho utilizado recentemente:
        </p>
        <ul class="tecnologias">
          <li>Nuxt</li>
          <li>Vue.js</li>
          <li>Next.js</li>
          <li>Docker</li>
          <li>TypeScript</li>
          <li>Python</li>
        </ul>
      </div>
      <div class="foto">
        <div class="foto-wrapper">
          <img src="@/assets/foto-camilly.jpg" alt="Foto de Camilly" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@400;600;700&display=swap');

.sobre-container {
  padding: 6rem 1rem;
  display: flex;
  justify-content: center;
}

.conteudo {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1000px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
}

.texto {
  flex: 1 1 400px;
  max-width: 500px;
}

.header-text {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.numero {
  color: #baff75;
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 20px;
}

.titulo {
  color: #f7f6f6;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}

.texto p {
  color: #f7f6f6;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}

.tecnologias {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0.5rem 1rem;
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.tecnologias li {
  color: #f7f6f6;
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
  position: relative;
  padding-left: 1.2rem;
}

.tecnologias li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #baff75;
}

.foto {
  flex: 1 1 250px;
  display: flex;
  justify-content: center;
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

.foto img {
  width: 350px;
  height: auto;
  border-radius: 4px;
  display: block;
  transition: transform 0.4s ease, filter 0.4s ease;
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
</style>
