<script setup>
let a = 15
let b = 25
</script>

<template>
  <p>{{ `Soma: ${a + b}` }}</p>
    <p>{{ `Subtração: ${a - b}` }}</p>
        <p>{{ `Multiplicação: ${a * b}` }}</p>
            <p>{{ `Divisão: ${a / b}` }}</p>
</template>