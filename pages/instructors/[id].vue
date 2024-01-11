<script setup>
	const route = useRoute()
	const { data } = await useAsyncData('page-data', () =>
		queryContent(`/instructors/${route.params.id}`).findOne()
	)
</script>

<template>
	<InnerHero :title="data.title" />
	{{ data.education }}
</template>
