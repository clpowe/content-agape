<script setup>
	defineProps({
		title: String,
		list: Array
	})
</script>

<template>
	<div class="infolist">
		<h3>
			{{ title }}
		</h3>
		<div>
			<ul>
				<li v-for="item in list" :key="item">
					{{ item }}
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
	.infolist {
		display: flex;
		flex-wrap: wrap;
		padding-top: 1.5rem;
		border-top: 2px solid var(--clr-black-200);
	}

	.infolist > h3 {
		font-size: var(--fs-600);
		text-transform: uppercase;
		font-weight: 900;
		flex-basis: 350px;
	}

	ul {
		list-style: none;
		color: var(--clr-black-400);
	}

	li {
		flex-basis: 0;
	}
</style>
