<script setup>
import { ref } from 'vue'

const usuarioLogado = ref(false)

function alternarLogin() {
  usuarioLogado.value = !usuarioLogado.value
}
</script>

<template>
    <h4>Sistema de Login</h4>
  <p v-if="usuarioLogado">Bem-vindo!</p>
  <p v-else>Faça login</p>

  <button @click="alternarLogin">
    {{ usuarioLogado ? 'Sair' : 'Entrar' }}
  </button>
</template>
