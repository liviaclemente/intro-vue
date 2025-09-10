<template>
  <div class="slot-livia">
    <h3>Teste de Slot - Lívia Clemente</h3>
    <slot></slot> <!-- Aqui é onde o conteúdo passado pelo componente pai será exibido -->
  </div>
</template>

<script setup>
  name: "Slot" // Define o nome do componente
</script>

<style>
.slot-livia {
  border: 1px solid #f9436a;  /* Adiciona uma borda ao redor do componente */
  padding: 16px;           /* Espaçamento interno */
  margin: 8px 0;           /* Espaçamento externo */
}
</style>
