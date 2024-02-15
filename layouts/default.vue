<template>
	<div class="parent">
		<MyHeader />

		<main class="content-grid flow">
			<slot />
		</main>

		<MyFooter />
	</div>
</template>

<style>
	.parent {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		/* grid-template-rows: auto 1fr auto; */
	}
	main {
		container-type: inline-size;
		container-name: main;
	}
</style>
