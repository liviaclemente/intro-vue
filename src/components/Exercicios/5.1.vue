<script setup>
    import { ref } from 'vue'
    let nome = ref('')
    let email = ref('')
    let idade = ref('')
    let bio = ref('')

</script>

<template>
    <h4>Sistema de Cadastro</h4>

    <p>Digite o seu nome: {{ nome }}</p>
    <input type="text" v-model="nome"></input>

    <p>Digite o seu email: {{ email }}</p>
    <input type="text" v-model="email"></input>

    <p>Digite a sua idade: {{ idade }}</p>
    <input type="number" v-model="idade"></input>

    <p>Digite uma biografia: {{ bio }}</p>
    <input type="text" v-model="bio"></input>

</template>