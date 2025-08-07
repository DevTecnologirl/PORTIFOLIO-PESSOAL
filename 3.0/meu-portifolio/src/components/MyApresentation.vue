<template>
  <section id="sobre" class="sobre-container">
    <div class="texto">
      <p class="saudacao">Olá, meu nome é</p>
      <h1 class="nome">Camilly Duarte.</h1>
      <h2 class="frase">Eu construo experiências digitais bonitas e funcionais.</h2>
      <p class="descricao">
        Sou uma desenvolvedora front-end apaixonada por transformar ideias em interfaces que sejam intuitivas, acessíveis e impactantes. No momento, estou focada em criar produtos digitais centrados no usuário e de alta qualidade.
      </p>
    </div>
  </section>
</template>

<style scoped>
.sobre-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
}

.texto {
  max-width: 800px;
  text-align: left;
}

.saudacao {
  color: #baff75;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: monospace;
}

.nome {
  font-size: 4rem;
  color: #f7f6f6;
  font-weight: 700;
  margin: 0;
}

.frase {
  font-size: 3rem;
  color: #c4a7fe;
  font-weight: 700;
  margin: 1rem 0 2rem 0;
}

.descricao {
  font-size: 1.1rem;
  color: #f7f6f6;
  line-height: 1.6;
  max-width: 600px;
}
</style>
