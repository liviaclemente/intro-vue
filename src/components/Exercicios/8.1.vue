<script setup>
import { ref } from 'vue'


const produto = ref('')
const marca = ref('')
const cor = ref('')
const preco = ref('')

function focoProximoInput(atual) {
  if (atual === 'produto') {
    marcaInput.value && marcaInput.value.focus()
  } else if (atual === 'marca') {
    corInput.value && corInput.value.focus()
  } else if (atual === 'cor') {
    precoInput.value && precoInput.value.focus()
  } else if (atual === 'preco') {
    produtoInput.value && produtoInput.value.focus()
  }
}

function enviarFormulario() {
  alert(`Maquiagem cadastrada:\nNome: ${produto.value}\nMarca: ${marca.value}\nCor: ${cor.value}\nPreço: ${preco.value}`)
produto.value = ''
marca.value = ''
cor.value = ''
preco.value = ''
}
</script>

<template>
    <h4>Cadastro de Maquiagens</h4>
  <form @submit.prevent="enviarFormulario" class="form-maquiagem">
    <label>
      Produto:
  <input type="text" v-model="produto" required ref="produtoInput" @keydown.space.prevent="focoProximoInput('produto')" />
    </label>
    <label>
      Marca:
  <input type="text" v-model="marca" required ref="marcaInput" @keydown.space.prevent="focoProximoInput('marca')" />
    </label>
    <label>
      Cor:
  <input type="text" v-model="cor" required ref="corInput" @keydown.space.prevent="focoProximoInput('cor')" />
    </label>
    <label>
    Preço:
  <input type="number" v-model="preco" required ref="precoInput" @keydown.space.prevent="focoProximoInput('preco')" />
    </label>
    <button type="submit">Cadastrar</button>
  </form>
</template>

<style scoped>
.form-maquiagem {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
  color: #333;
}
label {
  display: flex;
  flex-direction: column;
  font-weight: bold;
}
input {
  margin-top: 0.3rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #aaa;
}
button {
  padding: 0.7rem;
  border: none;
  border-radius: 4px;
  background: pink;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: #f8658e;
}
</style>
