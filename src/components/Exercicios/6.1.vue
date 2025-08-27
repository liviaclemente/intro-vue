<script setup>
    let isActive = false
    let isDisabled = false
    let isLoading = true
</script>

<template>
    <button 
        :class="{
            'ativo': isActive,
            'inativo': isDisabled,
            'carregando': isLoading
        }"
    >
        Clique aqui
    </button>
</template>

<style scoped>
    .ativo {
        color: green;
    }

    .inativo {
        color: red;
    }

    .carregando {
        color: yellow;
    }
</style>
