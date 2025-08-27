<script setup>
let texto = '<strong> Texto </strong>' // texto em negrito
</script>

<template>

    <div v-html="texto"></div>
    <div>{{ texto }}</div>

</template>