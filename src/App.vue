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
// import UserCard from './components/Exemplo10Props.vue'
// const user = {
//         nome: String, 
//         email: String,
//         telefone: String,
//         idade: Number,
//         ativo: Boolean,
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
import ProductCard from './components/Exercicios/10.1.vue'


</script>

<template>
<Exemplo01></Exemplo01>
<Exemplo02></Exemplo02>
<Exemplo03></Exemplo03>
<Exemplo04></Exemplo04>
<Exemplo05></Exemplo05>
<Exemplo06></Exemplo06>
<Exemplo07></Exemplo07>
<Exemplo08></Exemplo08>
<Exemplo09></Exemplo09>
<!-- <UserCard :nome="user.nome" email="livia@gmail.com" idade="17" telefone="1199999999" ativo="true" ></UserCard> -->
 <ProductCard title="Blush em Pó Cloud Crush" :price="259" image="https://www.toofaced.com.br/media/export/cms/products/1000x1000/2f_sku_163973_1000x1000_0.jpg" :inStock="true" />

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
</template>