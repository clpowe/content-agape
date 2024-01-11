import type { LazyProseCodeInline } from '#build/components';
<script setup lang="ts">
	import IconLogo from '~/assets/agape-logo.svg'
	import { Button } from '../components/ui/button'

	import type { NavItem } from '@nuxt/content/dist/runtime/types'

	// const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

	const navigation = ref([
		{ name: 'home', link: '/' },
		{ name: 'about', link: '/about' },
		{ name: 'services', link: '/our-services' },
		// { name: 'contact', link: '/contact' },
		{ name: 'apply', link: '/apply' }
	])

	const links = [
		{
			label: 'Home',
			to: '/'
		},
		{
			label: 'About',
			to: '/about'
		},
		{
			label: 'Services',
			to: '/our-services'
		},
		{
			label: 'Contact',
			to: '/contact'
		},
		{
			label: 'Apply',
			to: '/apply'
		}
	]

	const route = useRoute()
	watch(
		() => route.path,
		() => closeMenu()
	)

	const menuRef = ref<HTMLDialogElement | null>(null)
	const nav = ref(null)
	const closebtn = ref<HTMLButtonElement | null>(null)
	const { focused } = useFocus(closebtn)

	function openMenu() {
		menuRef.value?.showModal()
		focused.value = true
	}
	function closeMenu() {
		menuRef.value?.close()
	}

	onClickOutside(nav, () => menuRef.value?.close())
</script>

<template>
	<!-- <UHeader :links="links">
		<template #logo>
			<IconLogo class="w-auto h-6" :fontControlled="false" />
			<Logo class="w-auto h-6" />
		</template>

		<template #right>
			<UDocsSearchButton label="" />

			<UColorModeButton />

			<UButton
				to="https://github.com/nuxt/ui"
				target="_blank"
				icon="i-simple-icons-github"
				color="gray"
				variant="ghost"
			/>
		</template>

		<template #panel>
			<UNavigationTree :links="mapContentNavigation(navigation)" />
		</template>
	</UHeader> -->
	<header class="content-grid absolute z-10 text-white w-full">
		<div class="infobar full-width content-grid place-content-end p-2">
			<div class="text-base justify-self-end uppercase">
				Phone: 1-800-321-5588
			</div>
		</div>
		<div class="primary-header primary-header__layout w-full text-white">
			<div class="logo">
				<NuxtLink class="font-bold"> AGAPE CHRISTIAN </NuxtLink>
			</div>

			<dialog
				ref="menuRef"
				class="bg-[var(--clr-black-500)] text-white text-xl p-8"
			>
				<Button
					autofocus
					@click="closeMenu"
					ref="closebtn"
					variant="ghost"
					class="flex items-center gap-2 text-xl md:hidden"
				>
					<div class="i-heroicons-x-mark"></div>
					close</Button
				>
				<button
					@click="closeMenu"
					ref="closebtn"
					color="black"
					autofocus
					variant="ghost"
					label="close"
					icon="i-heroicons-x-mark"
				/>

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
				<ul class="deskMenu outline outline-solid outline-1 rounded-full">
					<li v-for="link in navigation">
						<NuxtLink :to="link.link" class="py-2 px-3 transition-all">
							{{ link.name }}
						</NuxtLink>
					</li>
				</ul>
			</nav>

			<Button
				@click="openMenu"
				variant="ghost"
				class="flex rounded-full md:hidden"
			>
				<div class="i-heroicons-bars-3"></div>
				menu</Button
			>
			<Button class="rounded-full text-white" variant="secondary"
				>Contact</Button
			>
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
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: max(1vw, 1rem);
	}

	.deskMenu a {
		color: inherit;
		border-radius: calc(var(--radius) - 4px);
		font-size: var(--fs-300);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		font-weight: 500;
		text-decoration: none;
	}

	.deskMenu a:hover,
	.deskMenu a:focus {
		color: var(--clr-black-500);

		background-color: #fff;
		border-radius: 9999px;
	}

	dialog {
		margin: 0;
		position: absolute;
		min-width: 100vw;
		top: 0;
		left: 0;
		animation: slide-out 0.2s ease-out;
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
		animation: slide-in 0.3s ease-out;
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
