<script setup>
const compras = [
  { nome: 'Blush', preco: 30, categoria: 'Maquiagem' },
  { nome: 'Máscara de Hidratação', preco: 120, categoria: 'Cabelo' },
  { nome: 'Creme para Pele', preco: 50, categoria: 'Corpo' }
]

const formatoPreco = valor =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
</script>

<template>
  <div>
    <div v-for="(compra, index) in compras" :key="index" class="card">
      <h4>{{ compra.nome }}</h4>
      <p>{{ compra.categoria }}</p>
      <p>{{ formatoPreco(compra.preco) }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #f4436f;
  background-color: #fdc5c9;
  color: black;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 6px;
}
</style>
