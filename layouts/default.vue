<template>
	<div>
		<MyHeader />
		<main class="content-grid flow">
			<slot />
		</main>
	</div>
	<MyFooter />
</template>

<style>
	main {
		container-type: inline-size;
		container-name: main;
	}
</style>
