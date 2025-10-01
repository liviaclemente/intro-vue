<script setup>
import { ref } from 'vue'
const temperatura = ref(25)
const isQuente = ref(false)
const isFrio = ref(false)
function verificarTemperatura() {
if (temperatura.value > 30) {
isQuente.value = true
isFrio.value = false

} else if (temperatura.value < 15) {
isFrio.value = true
isQuente.value = false
} else {
isQuente.value = false
isFrio.value = false
}
}
</script>
<template>
<div>
<input v-model="temperatura" type="number" placeholder="Temperatur
a">
<button @click="verificarTemperatura">Verificar</button>
<p :class="{ 'quente': isQuente, 'frio': isFrio, 'normal': !isQuente && !isFrio
}">
Temperatura: {{ temperatura }}°C
</p>
</div>
</template>
<style>
.quente { color: red; font-weight: bold; }
.frio { color: blue; font-weight: bold; }
.normal { color: green; }
</style>