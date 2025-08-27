<script setup>
function validarFormulario() {
    alert('Formulário enviado com sucesso!')
    event.preventDefault()
}
</script>

<template>
    <form action="https://g1.globo.com" @submit="validarFormulario">
        <input type="submit" value="Enviar Formulário">
    </form>

</template>