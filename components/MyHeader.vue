import type { LazyProseCodeInline } from '#build/components';
<script setup lang="ts">
	const menuRef = ref<HTMLDialogElement | null>(null)
	const nav = ref(null)

	function openMenu() {
		menuRef.value?.showModal()
	}
	function closeMenu() {
		menuRef.value?.close()
	}

	onClickOutside(nav, () => menuRef.value?.close())

	const navigation = ref([
		{ name: 'home', link: '/' },
		{ name: 'about', link: '/about' },
		{ name: 'services', link: '/services' },
		{ name: 'contact', link: '/contact' },
		{ name: 'apply', link: '/apply' }
	])
</script>

<template>
	<header class="content-grid relative">
		<div class="infobar full-width content-grid place-content-end p-2">
			<div text="base" uppercase class="justify-self-end">
				Phone: 1-800-321-5588
			</div>
		</div>
		<div class="primary-header primary-header__layout">
			<div class="logo">
				<NuxtLink uppercase font="bold"> Agape Christian Bar Prep </NuxtLink>
			</div>

			<button @click="openMenu">Menu</button>
			<dialog ref="menuRef" class="bg-black text-white text-xl">
				<button autofocus @click="closeMenu">Close</button>
				<nav ref="nav" class="block md:hidden">
					<ul class="mobileMenu">
						<li v-for="link in navigation">
							<NuxtLink :to="link.link" class="text-3xl uppercase">
								{{ link.name }}
							</NuxtLink>
						</li>
					</ul>
				</nav>
			</dialog>

			<nav class="hidden md:block">
				<ul class="deskMenu">
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

	.deskMenu {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: max(3vw, 1rem);
	}

	.deskMenu a {
		color: inherit;
		font-size: var(--fs-300);
		text-transform: uppercase;
		font-weight: 900;
		text-decoration: none;
	}

	.deskMenu a:hover,
	.deskMenu a:focus {
		color: var(--clr-accent-500);
		text-decoration: underline;
	}

	dialog {
		margin: 0;
		position: absolute;
		min-width: 100vw;
		top: 0;
		left: 0;
		animation: slide-out 0.4s ease-out;
	}
	@starting-style {
		dialog[open] {
			margin: 0;
			position: absolute;
			min-width: 100vw;
			top: 0;
			left: 0;
			transform: scaleY(0);
		}
	}
	dialog[open] {
		animation: slide-in 0.4s ease-out;
	}

	dialog[open]::backdrop {
		animation: backdrop-fade-in 0.7s ease-out forwards;
	}

	/* Animation keyframes */

	@keyframes slide-in {
		0% {
			transform: translateY(-100%);
			display: none;
		}

		100% {
			transform: translateY(0);
			display: block;
		}
	}

	@keyframes slide-out {
		0% {
			transform: translateY(0);
			display: block;
		}

		100% {
			transform: translateY(-100%);
			display: none;
		}
	}

	@keyframes backdrop-fade-in {
		0% {
			background-color: rgb(0 0 0 / 0);
		}
		100% {
			background-color: rgb(0 0 0 / 0.65);
		}
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
