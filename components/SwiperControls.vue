<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex w-full gap-4">
		<Button size="icon" @click="swiper.slideNext()">
			<span class="i-heroicons-chevron-left" />
		</Button>

		<Button size="icon" @click="swiper.slidePrev()">
			<span class="i-heroicons-chevron-right" />
		</Button>
	</div>
</template>
