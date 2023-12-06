<script setup>
	useSeoMeta({
		title: 'Agape Christian Bar Prep',
		description:
			'Agape Christian Bar Prep helps students prepare to pass the bar exam through personalized services that offer a holistic approach to bar exam preparation.',
		ogTitle: 'Agape Christian Bar Prep',
		ogDescription:
			'Agape Christian Bar Prep helps students prepare to pass the bar exam through personalized services that offer a holistic approach to bar exam preparation.',
		ogImage: '[og:image]',
		ogUrl: 'https://www.agapechristianbarprep.com/',
		twitterTitle: 'Agape Christian Bar Prep',
		twitterDescription:
			'Agape Christian Bar Prep helps students prepare to pass the bar exam through personalized services that offer a holistic approach to bar exam preparation.',
		twitterImage: '[twitter:image]',
		twitterCard: 'We help students prepare to pass the bar exam'
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

	const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>

<template>
	<ContentRenderer :value="data">
		<main>
			<ContentRendererMarkdown :value="data" class="content-grid flow" />
		</main>
	</ContentRenderer>
</template>
