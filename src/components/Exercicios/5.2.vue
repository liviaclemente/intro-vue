<script setup>
import { ref } from 'vue'

let peso = ref('')
let altura = ref('')
let classificacao = ref('')
let imc = ref('')

function calcularIMC(peso, altura) {
    let calc = peso / (altura * altura)
    imc.value = calc.toFixed(2)
    if (calc <= 18.5) {
        classificacao.value = 'Abaixo do peso'
    } else if (calc <= 25) {
        classificacao.value = 'Peso Normal'
    } else if (calc <= 30) {
        classificacao.value = 'Sobrepeso'
    } else {
        classificacao.value = 'Obesidade'
    }
}
</script>

<template>
  <div class="container">
    <h3>Sistema de Calculo de IMC</h3>

    <h4>Informações</h4>
    <p>Digite o seu peso:</p>
    <input type="text" v-model="peso" />

    <p>Digite a sua altura:</p>
    <input type="text" v-model="altura" />

    <!-- Botão posicionado abaixo dos inputs -->
    <button @click="calcularIMC(peso, altura)">Clique para calcular</button>

    <p v-if="imc">IMC: {{ imc }}</p>
    <p v-if="classificacao">Classificação: {{ classificacao }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 12px; 
  width: 300px;
  margin: 20px auto; 
}

input {
  padding: 6px;
  font-size: 14px;
}

button {
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px; 
}
</style>
