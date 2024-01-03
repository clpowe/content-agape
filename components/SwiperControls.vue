<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex w-full gap-4">
		<button bg="black" p="" text="white" @click="swiper.slideNext()">
			<div class="i-ic:baseline-arrow-left" text="4xl"></div>
		</button>
		<button bg="black" p="" text="white" @click="swiper.slidePrev()">
			<div class="i-ic:baseline-arrow-right" text="4xl"></div>
		</button>
	</div>
</template>
