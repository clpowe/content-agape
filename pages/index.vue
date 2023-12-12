<script setup>
	import { register } from 'swiper/element/bundle'
	register()

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

	const { data } = await useAsyncData('testimonials', () =>
		queryContent('testimonnials').find()
	)

	const spaceBetween = 32
	const onProgress = (e) => {
		const [swiper, progress] = e.detail
		console.log[progress]
	}

	const onSlideChange = (e) => {}
</script>

<template>
	<h1 class="editable">We help <span>you</span> pass the bar</h1>
	<p>Personalized service with proven results</p>

	<NuxtImg
		src="homeHero.png"
		alt="Young man with glasses
		studying"
		class="w-full"
	/>
	<h2 class="editable">Our <span> service </span></h2>
	<p>
		Agape Christian Bar Prep offers many services to help students prepare for
		success in law school and on the bar exam.  Our services are customized to
		clearly identify and meet the individual needs of law students and law
		school graduates.
	</p>
	<div class="my-grid">
		<div>
			<h3>Bar Prep</h3>
			<p>
				Preparing for the bar exam can be challenging, but Agape Christian Bar
				Prep provides a supportive learning environment and strategic plan to
				help you succeed.
			</p>
			<NuxtLink>Learn more</NuxtLink>
		</div>
		<div>
			<h3>Law School Exam Prep</h3>
			<p>
				Ease the anxiety of law school and law school exams and reach your full
				potential academically with our expert help.
			</p>
			<NuxtLink>Learn more</NuxtLink>
		</div>
		<div>
			<h3>Consultations</h3>
			<p>
				Agape Christian Bar Prep offers many services to help students prepare
				for success in law school and on the bar exam.
			</p>
			<NuxtLink>Learn more</NuxtLink>
		</div>
	</div>

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

	<h2 class="editable">
		<span>Student</span>
		TESTIMONIALS
	</h2>
	<p class="editable">
		I was devastated after failing the Bar on my first attempt. I was referred
		to Agape Bar Prep and committed to passing this test the second time around.
		Tishia and the staff at Agape fully prepared me for my second round, and I
		passed! The instructors are personally invested in each student passing.
	</p>

	<section class="breakout md:full-width">
		<swiper-container
			init="true"
			:slides-per-view="1"
			:space-between="spaceBetween"
			:centered-slides="true"
			loop="true"
			:breakpoints="{
				768: {
					slidesPerView: 3
				}
			}"
			@swiperprogress="onProgress"
			@swiperslidechange="onSlideChange"
		>
			<swiper-slide v-for="slide in data" :key="slide.title">
				<blockquote max-w="75ch" text="left">
					<ContentRenderer :value="slide" />
					<footer text="right">{{ slide.title }}</footer>
				</blockquote>
			</swiper-slide>
		</swiper-container>
	</section>
</template>

<style>
	.my-grid {
		display: grid;
		grid-auto-columns: auto;
		gap: 1rem;
	}

	@media (min-width: 500px) {
		.my-grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, calc(50% - 1rem));
			grid-auto-columns: auto;
		}
	}
	swiper-container {
		width: 100%;
		height: 100%;
	}

	swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: opacity 0.5s ease-in-out;
	}

	swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.swiper-slide-prev {
		opacity: 0.2;
	}
	.swiper-slide-next {
		opacity: 0.2;
	}
</style>
