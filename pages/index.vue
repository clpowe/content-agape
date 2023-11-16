<script setup>
	useHead({
		title: 'Agape Christian Bar Prep'
	})

	const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>

<template>
	<ContentRenderer :value="data">
		<main>
			<ContentRendererMarkdown :value="data" class="content-grid flow" />
		</main>
	</ContentRenderer>
</template>
