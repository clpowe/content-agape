<template>
	<div class="panel">
		<Button
			:arial-controls="'accordion-content-' + ariaTitle"
			:id="'accordion-control-' + ariaTitle"
			class="rounded-full border-black w-full py-8 text-3xl font-semibold flex flex-row items-center justify-between"
			variant="outline"
			@click.prevent="togglePanel"
		>
			{{ title }}
			<span class="i-heroicons-plus"> </span>
		</Button>

		<Transition appear name="slide" mode="out-in">
			<div class="content origin-top scale-y-100" v-if="showPanel">
				<div class="mt-6 rounded-[1rem] border border-black p-4">
					<slot />
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup>
	import { Button } from '../components/ui/button'

	const props = defineProps({
		title: { type: String, required: true },
		ariaTitle: { type: String, required: true }
	})

	const showPanel = ref(false)

	function togglePanel(event) {
		showPanel.value = !showPanel.value
	}
</script>

<style scoped>
	.slide-enter-from {
		transform: scaleY(0);
	}

	.slide-enter-active {
		animation: slide-in 0.5s;
	}
	.slide-leave-active {
		animation: slide-in 0.5s reverse;
	}
	@keyframes slide-in {
		0% {
			transform: scaleY(0);
		}
		50% {
			transform: scaleY(1.05);
		}
		100% {
			transform: scaleY(1);
		}
	}
</style>
