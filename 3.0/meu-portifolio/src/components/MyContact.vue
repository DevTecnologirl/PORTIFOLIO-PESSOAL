<template>
  <section class="contact-section">
    <h5 class="section-index"><span class="numero">05.</span> What’s Next?</h5>
    <h2 class="contact-title">Entre em contato</h2>
    <p class="contact-text">
      Embora eu não esteja procurando novas oportunidades no momento, minha caixa de entrada está sempre aberta. 
      Se você tem uma pergunta ou apenas quer dizer oi, farei o possível para entrar em contato com você!
    </p>
    <a href="mailto:tecnologirlinformatica@gmail.com" class="contact-button">
      Dizer Olá
    </a>
  </section>
</template>

<style scoped>
.numero {
  color: #baff75;
  font-family: monospace;
  font-size: 1.5rem;
}
.contact-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 6rem 1rem;
  text-align: center;
  color: #cbd5e1;
}

.section-index {
  color: #ffffff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 1.5rem;
}

.contact-text {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.contact-button {
  display: inline-block;
  border: 1px solid #baff75;
  padding: 0.75rem 2rem;
  color: #baff75;
  border-radius: 6px;
  font-family: monospace;
  font-size: 1rem;
  transition: background 0.3s, color 0.3s;
  text-decoration: none;
}

.contact-button:hover {
  background-color: #baff75;
  color: #0f172a;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 4rem 1rem;
  }

  .section-index {
    font-size: 1.2rem;
  }

  .numero {
    font-size: 1.2rem;
  }

  .contact-title {
    font-size: 1.8rem;
  }

  .contact-text {
    font-size: 1rem;
  }
}
</style>
