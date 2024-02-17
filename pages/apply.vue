<script setup>
	useSeoMeta({
		title: 'Agape Christian Application',
		description: '[description]',
		ogTitle: '[og:title]',
		ogDescription: '[og:description]',
		ogImage: '[og:image]',
		ogUrl: '[og:url]',
		twitterTitle: '[twitter:title]',
		twitterDescription: '[twitter:description]',
		twitterImage: '[twitter:image]',
		twitterCard: 'summary'
	})

	useHead({
		htmlAttrs: {
			lang: 'en'
		},
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				href: '/favicon.png'
			}
		]
	})
</script>

<template>
	<InnerHero title="Apply Now" />
</template>

<style>
	[data-type='text'] .formkit-inner {
		border-color: red;
	}

	[data-invalid] .formkit-inner {
		border-color: red;
		box-shadow: 0 0 0 1px red;
	}
</style>
