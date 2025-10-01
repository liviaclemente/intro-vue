<template>
	<!-- Este é o container principal que armazena todo o conteúdo do portfólio -->
  <div class="container">
    <!-- Essa primeira divisão engloba a minha foto, nome e descrição  -->
    <div class="perfil">
      <img class="foto-perfil" src="/src/components/Avaliation/Foto de perfil.jpg" alt="Foto de perfil - Lívia Clemente" />
    	<!-- Informação que vem da variável meuNome -->
	  <h2>{{ meuNome }}</h2>
	    <!-- Informação que vem da variável minhaDescricao -->
      <p class="descricao">{{ minhaDescricao }}</p>
    </div>

    <!-- Essa segunda divisão engloba os meus projetos -->
    <section class="projetos">
	<!-- Lista de projetos, utilizando v-for -->
      <h3>Meus projetos</h3>
      <div class="lista">
		<!-- Gera um card para cada item -->
        <div v-for="(project, index) in projects" :key="index" class="cards">
		<!-- Informações do projeto e seus respectivos links-->
          <h4>{{ project.titulo }}</h4>
          <p>{{ project.sobre }}</p>
          <a :href="project.link" target="_blank">Clique aqui</a>
        </div>
      </div>
    </section>

    <!-- Essa terceira divisão engloba formas de contato -->
    <section class="contato">
      <h3>Contato</h3>
	  <!-- E-mail clicável e Link para o LinkedIn -->
      <p>Email: <a href="mailto:livia.clemente@aluno.senai.br">livia.clemente@aluno.senai.br</a></p>
  	<p>LinkedIn: <a href="https://www.linkedin.com/in/l%C3%ADvia-clemente-18b18136a/" target="_blank">liviaclemente.com</a></p>
    </section>
  </div>
</template>

<script setup>
// Nessa parte ficam as variáveis reativas e dados fixos exibidos
const meuNome = "Lívia Clemente"

const minhaDescricao = "Sou dedicada, proativa e determinada e acredito que conhecimento transforma vidas. Pretendo seguir carreira em Direito, mas carrego tudo o que aprendo em TI como uma base essencial."

const projects = [
  {
    titulo: "Economia Circular",
    sobre: "Esse projeto é baseado em uma “Comunidade da Economia Circular”, onde permite que os usuários de realizar login e acessar um espaço digital para a troca de conhecimento e Co-criação de soluções práticas.",
    link: "https://github.com/liviaclemente/PROJETO"
  },
  {
    titulo: "Index",
    sobre: "Site que realiza a venda de eletrônicos, mais especificamente smartphones, fones de ouvido, relógios, tablets e notebooks. Ele foi criado com o intuito de simplicar a escolha de eletrônicos, utilizando de recursos gráficos e apresentações intuitivas.",
    link: "https://github.com/jimmyadmsenior/Index"
  }
]
</script>

<style scoped>
/* Nessa parte fica toda a estilização da minha página */
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container {
  max-width: 600px;
  margin: auto;
  font-family: 'Poppins', Arial, sans-serif;
  text-align: left;
  background: #fff; 
  color: black;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  border: 4px solid #2f00ff;
}

.perfil {
  margin-bottom: 20px;
}

.foto-perfil {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #2f00ff;
}

.descricao {
  font-style: italic;
  color: #000000;
}

.projetos {
  margin-top: 30px;
}

.lista {
  display: grid;
  gap: 15px;
  margin-top: 10px;
}

.cards {
  border: 1px solid #2f00ff;
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  background: #fff;;
}

.cards a {
  color: #2f00ff;
  text-decoration: none;
}

.contato {
  margin-top: 30px;
}

.contato a {
  color: #2f00ff;
}
</style>
