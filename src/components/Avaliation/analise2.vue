<script setup>
import { ref } from 'vue'
const produtos = ref([
{ id: 1, nome: 'Notebook', preco: 2500 },
{ id: 2, nome: 'Mouse', preco: 50 },
{ id: 3, nome: 'Teclado', preco: 150 }
])
const filtro = ref('')
</script>
<template>
<div>

Avaliação Formativa 4

<input v-model="filtro" placeholder="Filtrar produtos...">
<ul>
<li v-for="produto in produtos" :key="[produto.id]">
{{ produto.nome }} - R$ {{ produto.preco }}
</li>
</ul>
</div>
</template>