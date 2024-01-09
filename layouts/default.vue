<template>
	<div class="parent">
		<MyHeader />

		<UMain class="content-grid flow">
			<slot />
		</UMain>

		<MyFooter />
	</div>
</template>

<style>
	.parent {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
	main {
		container-type: inline-size;
		container-name: main;
	}
</style>
