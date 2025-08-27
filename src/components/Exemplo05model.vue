<script setup>
    import { ref } from 'vue'
    let texto = ref('')
</script>

<template>
    <p>Valor do input: {{ texto }}</p>
    <input type="text" v-model="texto"></input>

</template>