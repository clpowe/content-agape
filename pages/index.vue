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

	//const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>

<template>
	<!-- <ContentRenderer :value="data">
		<main>
			<ContentRendererMarkdown :value="data" class="content-grid flow" />
		</main>
	</ContentRenderer> -->

	<h1 class="editable">We help <span>you</span> pass the bar</h1>
	<p>Personalized service with proven results</p>

	<img
		src="https://ik.imagekit.io/cpds/Agape_Christian/HeroImageMd_7IJG72IBh.png?updatedAt=1688698892851"
		alt="Young man with glasses
		studying"
	/>
	<h2 class="editable">Our <span> service </span></h2>
	<p>
		Agape Christian Bar Prep offers many services to help students prepare for
		success in law school and on the bar exam.  Our services are customized to
		clearly identify and meet the individual needs of law students and law
		school graduates.
	</p>

	<h2 class="editable">
		How our Program is
		<span> diffrent</span>
	</h2>
	<p class="editable">
		Agape Christian Bar Prep helps students prepare to pass the bar exam through
		personalized services that offer a holistic approach to bar exam
		preparation. Our program is uniquely designed to meet the individual
		spiritual, mental, emotional and academic needs of students while
		simultaneously empowering them to conquer the bar exam and achieve their
		dreams of becoming attorneys.
	</p>
</template>
