<template>
	<h4 :id="id">
		<slot v-if="id && generate" />
		<slot v-else />
	</h4>
</template>

<script setup lang="ts">
	import { computed, useRuntimeConfig } from '#imports'

	const props = defineProps<{ id?: string }>()

	const { headings } = useRuntimeConfig().public.mdc
	const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>

<style scoped>
	h4 {
		color: var(--clr-black-500);
		font-weight: 600;
	}
</style>
