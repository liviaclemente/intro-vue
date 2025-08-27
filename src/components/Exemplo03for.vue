<script setup>
let nomes = ['Daniel', 'Celsão', 'Marlon']
</script>

<template>
    <ul>
        <li v-for="(nome, index) in nomes"> {{ index + 1}}.{{ nome }}</li>
    </ul>
</template>