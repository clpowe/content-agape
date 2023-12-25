<script setup>
	const { data } = await useAsyncData('teachers', () =>
		queryContent('teachers').find()
	)
</script>

<template>
	<div>
		<ContentDoc class="flow" />

		<div class="team-container">
			<TeacherCard
				v-for="teacher in data"
				:key="teacher.title"
				:name="teacher.title"
				:image="teacher.image"
				:role="teacher.position"
				:link="teacher._path"
			/>
		</div>
	</div>
</template>

<style scoped>
	.team-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
