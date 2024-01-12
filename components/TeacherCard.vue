<script setup lang="ts">
	defineProps<{
		role?: String
		name: Number
		image: String
		link: String
	}>()
</script>

<template>
	<NuxtLink
		:to="link"
		class="h-60 md:h-80 lg:h-96 overflow-hidden rounded-[2rem] transition-all relative"
	>
		<NuxtImg
			:src="image"
			class="object-cover h-full w-full grayscale hover:grayscale-0"
			provider="imagekit"
			fit="cover"
		/>
		<p
			class="absolute bottom-4 left-0 text-white font-bold uppercase text-3xl md:text-6xl"
		>
			{{ name }}
		</p>
		<!-- <p class="role">
			{{ role }}
		</p> -->
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
