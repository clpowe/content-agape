<script setup lang="ts">
	defineProps<{
		role?: String
		name: Number
		image: String
		link: String
	}>()
</script>

<template>
	<NuxtLink :to="link">
		<div class="card">
			<NuxtImg
				:src="image"
				height="300"
				width="250"
				provider="imagekit"
				fit="cover"
			/>
			<p class="tile">
				{{ name }}
			</p>
			<p class="role">
				{{ role }}
			</p>
		</div>
	</NuxtLink>
</template>

<style>
	.card {
		display: grid;
	}

	.tile {
		font-size: var(--fs-400);
		font-weight: 700;
		margin: 0;
	}
	.role {
		font-size: var(--fs-300);
		margin: 0;
	}
</style>
