<template>
  <section id="sobre" class="sobre-container">
    <div class="conteudo">
      <div class="texto">
        <div class="header-text">
          <span class="numero">01.</span>
          <h2 class="titulo">Sobre Mim</h2>
        </div>
        <p>
          Olá! Meu nome é Camilly e sou desenvolvedora front-end apaixonada por criar interfaces bonitas e funcionais. Minha jornada no desenvolvimento começou explorando maneiras de transformar ideias em experiências digitais intuitivas.
        </p>
        <p>
          Atualmente, tenho focado em construir produtos acessíveis e centrados no usuário. Acredito que o design e o código caminham juntos para criar impacto positivo e experiências memoráveis.
        </p>
        <p>
          Aqui estão algumas tecnologias que tenho utilizado recentemente:
        </p>
        <ul class="tecnologias">
          <li>JavaScript (ES6+)</li>
          <li>Vue.js</li>
          <li>React</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>WordPress</li>
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
  font-family: monospace;
  font-size: 1.5rem;
}

.titulo {
  color: #f7f6f6;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.texto p {
  color: #f7f6f6;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1rem;
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
  font-family: monospace;
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
}

.foto img {
  width: 350px;
  height: auto;
  border-radius: 4px;
  display: block;
}
</style>
