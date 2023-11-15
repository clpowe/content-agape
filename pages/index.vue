<script setup>
	const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>

<template>
	<ContentRenderer :value="data">
		<main class="content-grid">
			<ContentRendererMarkdown :value="data" />
		</main>
	</ContentRenderer>
</template>
