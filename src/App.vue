<script setup>
//import Exemplo01 from './components/Exemplo01Interpolacao.vue'
//import Exemplo02 from './components/Exemplo02Interpolacao.vue'
//import Exemplo03 from './components/Exemplo03for.vue'
// import Exemplo04 from './components/Exemplo04html.vue'
//import Exemplo05 from './components/Exemplo05model.vue'
//import Exemplo06 from './components/Exemplo06Classe.vue'
//import Exemplo07 from './components/Exemplo07Clique.vue'
//import Exemplo08 from './components/Exemplo08Teclado.vue'
//import Exemplo09 from './components/Exemplo09Enviar.vue'
//import Slot from './components/Slot.vue'

// import UserCard from './components/Exemplo10Props.vue'
// const user = {
//         nome: String, 
//         email: String,
//         telefone: String,
//         idade: Number,
//         ativo: Boolean,
// }
// import {ref} from 'vue'
// import Exemplo11 from './components/Exemplo11Emits.vue';
// const totalCliques = ref(0)
// function atualizarTotalCliques(valor){
//     totalCliques.value = valor
// }

//import Exercicio1 from './components/Exercicios/1.1.vue'
//import Exercicio2 from './components/Exercicios/1.2.vue'
//import Exercicio3 from './components/Exercicios/1.3.vue'
//import Exercicio4 from './components/Exercicios/2.1.vue'
//import Exercicio5 from './components/Exercicios/2.2.vue'
//import Exercicio6 from './components/Exercicios/3.1.vue'
//import Exercicio7 from './components/Exercicios/3.2.1.vue'
//import Exercicio8 from './components/Exercicios/4.1.vue'
//import Exercicio9 from './components/Exercicios/5.1.vue'
//import Exercicio10 from './components/Exercicios/5.2.vue'
//import Exercicio11 from './components/Exercicios/6.1.vue'
//import Exercicio12 from './components/Exercicios/7.1.vue'
//import Exercicio13 from './components/Exercicios/8.1.vue'
//import ProductCard from './components/Exercicios/10.1.vue'
// import Exercicio14 from './components/Exercicios/12.1.vue'
//import Exercicio15 from './components/Exercicios/12.2.vue'
import Exercicio16 from './components/Exercicios/12.3.vue'


// import { ref } from 'vue'
// import ProdutoCard from './components/Exercicios/11.1.vue'

// const produtos = ref([
// 	{ nome: 'Blush em Pó Cloud Crush - Too Faced', price: 250 },
// 	{ nome: 'Máscara De Cílios Better Than Sex - Too Faced', price: 221 },
// 	{ nome: 'Corretivo Líquido Born This Way Super Coverage - Too Faced', price: 237 }
// ]) // lISTA DE PRODUTOS

// const mensagemCompra = ref('')

// function handleBuy(nomeProduto) {
// 	const msg = `Você comprou ${nomeProduto}`
// 	mensagemCompra.value = msg
// 	console.log(msg)
// } // MENSAGEM DE COMPRA
</script>

<template>

<!-- Navegação entre páginas usando Vue Router
<nav>
	<RouterLink to="/exemplo1" style="color: white;">Exemplo 01</RouterLink> |
	<RouterLink to="/exemplo2" style="color: white;">Exemplo 02</RouterLink>
</nav>
O RouterView exibe o componente da rota atual -->
<!-- <RouterView /> -->

<Exemplo01></Exemplo01>
<Exemplo02></Exemplo02>
<Exemplo03></Exemplo03>
<Exemplo04></Exemplo04>
<Exemplo05></Exemplo05>
<Exemplo06></Exemplo06>
<Exemplo07></Exemplo07>
<Exemplo08></Exemplo08>
<Exemplo09></Exemplo09>

<!-- Exemplo visual do uso de slot padrão e slot nomeado
<Slot>
	<p style="color: #f9436a; font-weight: bold;">Este conteúdo aparece no slot padrão!</p>
	<template #extra>
		<button style="background: #ff9800; color: white; border: none; padding: 8px 16px; border-radius: 4px;">
			Conteúdo do <strong>slot nomeado</strong></button>
	</template>
</Slot> -->


<!-- <UserCard :nome="user.nome" email="livia@gmail.com" idade="17" telefone="1199999999" ativo="true" ></UserCard>
<ProductCard title="Blush em Pó Cloud Crush" :price="259" image="https://www.toofaced.com.br/media/export/cms/products/1000x1000/2f_sku_163973_1000x1000_0.jpg" :inStock="true" /> -->
<!-- <Exemplo11 @update="atualizarTotalCliques"></Exemplo11>
<p>Total de cliques: {{ totalCliques }}</p> -->


	<!-- <h2>TOO FACED</h2>
	<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
		<ProdutoCard
			v-for="(produto, i) in produtos"
			:key="produto.nome + i"
			:nome="produto.nome"
			:price="produto.price"
			@buy="handleBuy"
		/> 
	</div>
	<p v-if="mensagemCompra" style="font-weight: bold; color: #fcc4cc; margin-top: 1rem;">{{ mensagemCompra }}</p> -->

	<!-- ...outros componentes... -->
	<Exercicio1></Exercicio1>
	<Exercicio2></Exercicio2>
	<Exercicio3></Exercicio3>
	<Exercicio4></Exercicio4>
	<Exercicio5></Exercicio5>
	<Exercicio6></Exercicio6>
	<Exercicio7></Exercicio7>
	<Exercicio8></Exercicio8>
	<Exercicio9></Exercicio9>
	<Exercicio10></Exercicio10>
	<Exercicio11></Exercicio11>
	<Exercicio12></Exercicio12>
	<Exercicio13></Exercicio13>
	<Exercicio14>
	<!-- <button>
		Botão passado pelo slot padrão
	</button> -->
	</Exercicio14>
	<Exercicio15>
		<!-- <template #header>
			<h2 style="color: #1976d2; margin: 0;">Cabeçalho do Slot</h2>
		</template>
		<div style="padding: 12px; color: #fff;">Conteúdo principal do slot padrão</div>
		<template #footer>
			<footer style="color: #fff; background: #1976d2; padding: 8px; border-radius: 0 0 8px 8px;">Rodapé do Slot</footer>
		</template> -->
	</Exercicio15>
	<Exercicio16 
		titulo="Dreaming"
		descricao="PARTYNEXTDOOR"
	>
		<div>Um retrato de fuga emocional através dos sonhos, em que o eu lírico expressa desejos profundos e íntimos, 
			buscando conexão e prazer fora da realidade imediata.</div>
		<template #footer>
			<span style="color: #1976d2;">https://www.youtube.com/watch?v=QHx1-CM1nvk&list=RDmrhmeSVWcXw&index=2</span>
		</template>
	</Exercicio16>

</template>