import type { LazyProseCodeInline } from '#build/components';
<script setup>
	const navigation = ref([
		{ name: 'home', link: '/' },
		{ name: 'about', link: '/about' },
		{ name: 'services', link: '/services' },
		{ name: 'contact', link: '/contact' },
		{ name: 'apply', link: '/apply' }
	])
</script>

<template>
	<header class="content-grid">
		<div class="infobar full-width">
			<div class="">1800321-5588</div>
		</div>
		<div class="primary-header primary-header__layout">
			<div class="logo">
				<NuxtLink> Agape Christian Bar Prep </NuxtLink>
			</div>

			<nav>
				<ul>
					<li v-for="link in navigation">
						<NuxtLink :to="link.link">
							{{ link.name }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style scoped>
	.infobar {
		background-color: var(--clr-black-500);
		color: #fff;
	}

	.primary-header {
		padding-block: 1rem;
		margin-block-end: 3rem;
	}

	.primary-header__layout {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		max-width: 250px;
	}

	nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: max(3vw, 1rem);
	}

	nav a {
		color: inherit;
		font-size: var(--fs-300);
		text-transform: uppercase;
		font-weight: 900;
		text-decoration: none;
	}

	nav a:hover,
	nav a:focus {
		color: var(--clr-accent-500);
		text-decoration: underline;
	}
</style>
