
<template>
			<!-- Componente de cartão com header, main e footer usando props e slots -->
			<div class="card-slot">
				<!-- Header recebe as props titulo e descricao -->
				<header style="background: #1976d2; color: #fff; padding: 12px 16px; border-radius: 8px 8px 0 0;">
					<h2 style="margin: 0;">{{ titulo }}</h2>
					<p style="margin: 0; color: #e3e3e3;">{{ descricao }}</p>
				</header>
				<!-- Main recebe o conteúdo do slot padrão -->
				<main style="padding: 16px;">
					<slot></slot>
				</main>
				<!-- Footer recebe o conteúdo do slot nomeado 'footer' -->
				<footer style="background: #e3e3e3; padding: 10px 16px; border-radius: 0 0 8px 8px; color: #333;">
					<slot name="footer"></slot>
				</footer>
			</div>
</template>

<script setup>
// Props recebidas do componente pai
defineProps({
	titulo: String,
	descricao: String
})
</script>
