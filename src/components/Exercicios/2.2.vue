<script setup>
let idade = 20
</script>

<template>
  <h4>Classificação de idade</h4>
  <p v-if="idade <= 12">Criança</p>
  <p v-else-if="idade <= 17">Adolescente</p>
  <p v-else-if="idade <= 59">Adulto</p>
  <p v-else>Idoso</p>
</template>