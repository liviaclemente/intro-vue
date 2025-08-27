<script setup>
    let validacao = false
    let isError = true
    let isActive = false
    let isDisabled = false
</script>

<template>
    <!-- <p :class="validacao ?'ok' : 'falha'">Utilizando a diretiva class</p>  -->
    <p :class="{
        'ok': isActive,
        'falha': isError
    }">Teste Diretiva Class</p>

    <button>Clique aqui</button>
</template>

<style scoped>

    .ok{
        color: green;

    }

    .falha{
        color: red;

    }
</style>