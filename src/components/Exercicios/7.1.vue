<!-- <script setup>
import { ref } from 'vue'

const contador = ref(0)
const estado = ref('ativo') 

function incrementar() {
  contador.value++
}

function decrementar() {
  if (contador.value > 0) contador.value--
}

function//

</script>

<template>
  <div>
    <div class="botoes-estado">
      <button @click="mudarEstado('ativo')">Ativo</button>
      <button @click="mudarEstado('inativo')">Inativo</button>
      <button @click="mudarEstado('carregando')">Carregando</button>
    </div>

    <div>
      <button 
        @click="decrementar" 
        :disabled="contador === 0 || estado !== 'ativo'" 
        :class="estado"
      >-</button>

      <span :class="estado" class="contador-span">
        <template v-if="estado === 'carregando'">
          <span class="spinner"></span> Carregando...
        </template>
        <template v-else>
          {{ contador }}
        </template>
      </span>

      <button 
        @click="incrementar" 
        :disabled="estado !== 'ativo'" 
        :class="estado"
      >+</button>
    </div>
  </div>
</template>

<style scoped>
button {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.botoes-estado {
  margin-bottom: 1rem;
}

.contador-span {
  font-size: 1.5rem;
  margin: 0 10px;
}

.ativo {
  background: #e0ffe0;
  color: green;
}
.inativo {
  background: #ffe0e0;
  color: red;
}
.carregando {
  background: #ffffe0;
  color: yellow;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid #ccc;
  border-top: 2px solid orange;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5em;
  vertical-align: middle;
}
</style> -->
