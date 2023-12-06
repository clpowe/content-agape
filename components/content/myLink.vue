<script setup>
	const props = defineProps(['link'])
</script>

<template>
	<NuxtLink :to="link">
		<slot />
	</NuxtLink>
</template>
