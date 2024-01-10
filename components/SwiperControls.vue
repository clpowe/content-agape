<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex w-full gap-4">
		<button
			color="black"
			size="md"
			icon="i-heroicons-chevron-left"
			@click="swiper.slideNext()"
		/>

		<button
			color="black"
			size="md"
			icon="i-heroicons-chevron-right"
			@click="swiper.slidePrev()"
		/>
	</div>
</template>
