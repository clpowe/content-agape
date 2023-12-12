<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex justify-end w-full gap-4">
		<button bg="black" p="2" text="white" @click="swiper.slideNext()">
			Next
		</button>
		<button bg="black" p="2" text="white" @click="swiper.slidePrev()">
			Prev
		</button>
	</div>
</template>
