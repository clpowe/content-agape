import type { LazyProseCodeInline } from '#build/components';
<script setup lang="ts">
	// import Sidebar from 'primevue/sidebar'
	// import Button from 'primevue/button'

	const navigation = ref([
		{ name: 'home', link: '/' },
		{ name: 'about', link: '/about' },
		{ name: 'services', link: '/our-services' },
		{ name: 'apply', link: '/apply' }
	])

	const route = useRoute()
	watch(
		() => route.path,
		() => closeMenu()
	)

	const menuRef = ref<HTMLDialogElement | null>(null)
	const nav = ref(null)

	function closeMenu() {
		open.value = false
		menuRef.value?.close()
	}

	const open = ref(false)
	const visible = ref(false)
	onClickOutside(nav, () => menuRef.value?.close())
</script>

<template>
	<header class="content-grid z-10 text-white w-full">
		<div class="infobar full-width content-grid place-content-end p-2">
			<div class="text-base justify-self-end uppercase">
				Phone: 1-800-321-5588
			</div>
		</div>
		<div class="primary-header primary-header__layout w-full">
			<div class="logo">
				<NuxtLink to="/" class="font-bold flex items-center gap-4 flex-wrap">
					<SvgoIconLogo class="text-7xl text-primary" />
				</NuxtLink>
			</div>

			<nav class="hidden md:block relative">
				<ul class="deskMenu">
					<li v-for="link in navigation">
						<NuxtLink :to="link.link" class="">
							{{ link.name }}
						</NuxtLink>
					</li>
				</ul>
			</nav>

			<div class="space-x-2 flex">
				<Sidebar
					v-model:visible="visible"
					position="bottom"
					header="Sidebar"
					class="w-30rem"
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</Sidebar>
				<Button
					severity="warning"
					label="Submit"
					@click="visible = true"
					class="bg-red-800"
				/>
			</div>
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
		/* margin-block-end: 3rem; */
	}

	.primary-header__layout {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
	}

	.deskMenu {
		--radius: 999999px;
		--border: 2px;
		--height: 48px;
		--speed: 0.25s;

		height: var(--height);
		display: grid;
		grid-auto-flow: column;
		border-radius: var(--radius);
		grid-auto-columns: 1fr;
		position: relative;
		border: var(--border) solid hsl(0 0% 0%);
	}

	.deskMenu::after {
		pointer-events: none;
		content: '';
		width: calc(100% / 4);
		height: 100%;
		background: var(--clr-black-500);
		position: absolute;
		border-radius: calc(var(--radius) - var(--border));
		mix-blend-mode: difference;
		translate: calc(var(--active, 0) * 100%) 0;
		transition: translate, outline-color;
		transition-duration: var(--speed);
		transition-timing-function: var(--ease, ease);
		outline: 2px solid transparent;
	}

	.deskMenu li {
		color: black;
		display: grid;
		padding-inline: 1rem;
		place-content: center;
		border-radius: calc(var(--radius) - 4px);
		font-size: var(--fs-300);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.3s var(--animation);
	}

	.deskMenu:has(li:nth-of-type(2) a.router-link-exact-active) {
		--active: 1;
	}
	.deskMenu:has(li:nth-of-type(3) a.router-link-exact-active) {
		--active: 2;
	}
	.deskMenu:has(li:nth-of-type(4) a.router-link-exact-active) {
		--active: 3;
	}

	.deskMenu li:hover:has(a.router-link-exact-active) {
		--highlight: 0.35;
		background: hsla(0, 0%, 20%, 0);
	}

	.deskMenu li:hover {
		color: var(--clr-black-500);
		background-color: var(--clr-black-200);
		border-radius: 9999px;
	}

	.deskMenu a {
		height: 100%;
		width: 100%;
	}

	.deskMenu a.router-link-exact-active {
		color: #fff;
	}

	.mobileMenu {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		text-transform: uppercase;
		font-weight: 800;
	}

	.mobileMenu > a {
		font-size: 2em;
	}
</style>
