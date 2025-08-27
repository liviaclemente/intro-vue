<script setup>
let compras = ['Pão', 'Leite', 'Ovos', 'Frutas']
</script>

<template>
    <ul>
        <li v-for="(compra, index) in compras"> {{ index + 1}}.{{ compra }}</li>
    </ul>
</template>

<style scooped>
li {
    list-style: none;
}
</style>