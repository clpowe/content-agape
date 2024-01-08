<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex w-full gap-4">
		<UButton
			color="black"
			size="md"
			icon="i-heroicons-chevron-left"
			@click="swiper.slideNext()"
		/>

		<UButton
			color="black"
			size="md"
			icon="i-heroicons-chevron-right"
			@click="swiper.slidePrev()"
		/>
	</div>
</template>
