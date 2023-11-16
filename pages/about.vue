<script setup>
	const { data } = await useAsyncData('teachers', () =>
		queryContent('teachers').find()
	)
</script>

<template>
	<main>
		<ContentDoc class="flow content-grid" />
		<div class="content-grid">
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
	</main>
</template>

<style scoped>
	.team-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
