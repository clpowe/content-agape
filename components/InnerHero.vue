<script setup>
	const props = defineProps(['title'])
</script>

<template>
	<div class="p-6 pt-44 bg-gray-800 full-width">
		<div class="content-grid">
			<h1 class="text-white">{{ title }}</h1>
		</div>
	</div>
</template>
