<script setup>
import { toNumber } from '@vue/shared'

const props = defineProps({
    title: String,
    price: Number,
    image: String,
    inStock: Boolean
})
</script>

<template>
    <div class="card" v-if="title">
        <h3>{{ title }}</h3>
        <p v-if="price">Preço: R$ {{ price.toFixed(2) }}</p>
        <div :class="inStock ? 'ativo' : 'inativo'">{{ inStock ? 'Ativo' : 'Inativo' }}</div>
        <img v-if="image" :src="image" :alt="title" class="produto-img" />
    </div>
</template>

<style scoped>
    .card{
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem;

    }

    .ativo{
        color: greenyellow;
    }

    .inativo{
        color: red;
    }

    .produto-img {
        max-width: 120px;
        display: block;
        margin: 0 auto 0.5rem auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px #0001;
    }
</style>