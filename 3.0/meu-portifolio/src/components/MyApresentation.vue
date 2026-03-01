<template>
  <section id="sobre" class="sobre-container">
    <div class="texto">
      <p class="saudacao">Olá, meu nome é</p>
      <h1 class="nome">Camilly Duarte</h1>
      <h2 class="frase">Construo experiências digitais elegantes e eficientes.</h2>
      <p class="descricao">
        Sou desenvolvedora de software fullstack, estudante de Análise e Desenvolvimento de Sistemas e criadora de conteúdo de tecnologia @Tecnologirl. Sou apaixonada por tecnologia e inovação. Tenho foco em criar aplicações modernas, funcionais e intuitivas,
        sempre buscando aprimorar minhas habilidades e explorar novas ferramentas para entregar a melhor
        experiência possível ao usuário.
      </p>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@600;700&display=swap');

.sobre-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18rem 2rem;
}

.texto {
  max-width: 800px;
  text-align: left;
}

.saudacao {
  color: #baff75;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  letter-spacing: 1px;
}

.nome {
  font-size: 4rem;
  color: #f7f6f6;
  font-weight: 700;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.frase {
  font-size: 2.5rem;
  color: #c4a7fe;
  font-weight: 600;
  margin: 1rem 0 2rem 0;
  font-family: 'Poppins', sans-serif;
}

.descricao {
  font-size: 1.2rem;
  color: #f7f6f6;
  line-height: 1.6;
  max-width: 900px;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 768px) {
  .sobre-container {
    padding: 6rem 1rem;
  }

  .nome {
    font-size: 2.5rem;
  }

  .frase {
    font-size: 1.5rem;
  }

  .saudacao {
    font-size: 1rem;
  }

  .descricao {
    font-size: 1rem;
  }
}
</style>
