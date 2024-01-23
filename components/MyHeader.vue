import type { LazyProseCodeInline } from '#build/components';
<script setup lang="ts">
	import IconLogo from '@/assets/NewLogoLockup.svg'
	import { Button } from '../components/ui/button'
	import {
		Sheet,
		SheetContent,
		SheetDescription,
		SheetHeader,
		SheetTitle,
		SheetTrigger
	} from '@/components/ui/sheet'

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
	onClickOutside(nav, () => menuRef.value?.close())
</script>

<template>
	<header class="content-grid absolute z-10 text-white w-full">
		<div class="infobar full-width content-grid place-content-end p-2">
			<div class="text-base justify-self-end uppercase">
				Phone: 1-800-321-5588
			</div>
		</div>
		<div class="primary-header primary-header__layout w-full text-white">
			<div class="logo">
				<NuxtLink to="/" class="font-bold flex items-center gap-4 flex-wrap">
					<IconLogo class="text-9xl fill-white" />
				</NuxtLink>
			</div>

			<nav class="hidden md:block">
				<ul class="deskMenu outline outline-solid outline-1 rounded-full">
					<li v-for="link in navigation">
						<NuxtLink :to="link.link" class="py-2 px-3 transition-all">
							{{ link.name }}
						</NuxtLink>
					</li>
				</ul>
			</nav>

			<div class="space-x-2 flex">
				<MyContact />

				<Sheet v-model:open="open">
					<Button class="rounded-full text-white md:hidden" as-child>
						<SheetTrigger class="flex items-center gap-2 text-2xl">
							<div class="i-heroicons-bars-3 text-2xl"></div>
							menu
						</SheetTrigger>
					</Button>
					<SheetContent
						side="top"
						class="bg-[var(--clr-black-500)] text-white text-xl p-8"
					>
						<SheetHeader>
							<SheetTitle text-white>Menu</SheetTitle>
						</SheetHeader>
						<nav ref="nav" class="block text-white mt-">
							<ul class="mobileMenu">
								<li v-for="link in navigation">
									<NuxtLink :to="link.link" class="text-3xl uppercase">
										{{ link.name }}
									</NuxtLink>
								</li>
							</ul>
						</nav>
					</SheetContent>
				</Sheet>
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
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
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

	.deskMenu li {
		display: contents;
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
