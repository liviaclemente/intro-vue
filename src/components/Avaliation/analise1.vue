<script setup>
let nome = 'João'
let idade = 25
let ativo = true
</script>
<template>
<div>
<h1>{{ `Usuário: ${nome}` }}</h1>
<p>{{ idade + 5 }} anos</p>
<span v-if="ativo">Status: Ativo</span>
<span v-else>Status: Inativo</span>

</div>
</template>