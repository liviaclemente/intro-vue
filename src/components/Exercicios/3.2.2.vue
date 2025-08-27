<script setup>
let produtos = [
    {nome:'Base', preço:'35,50', categoria:'Economica'},
    {nome:'Corretivo', preço:'26,14', categoria: 'Economica'},
    {nome:'Blush', preço:'60,50', categoria: 'Alta'},

]

</script>

<template>
  <ul>
    <li v-for="produto in produtos">
      {{ produto.nome }} - R$ {{ produto.preco }} - {{ produto.categoria }}
    </li>
  </ul>
</template>