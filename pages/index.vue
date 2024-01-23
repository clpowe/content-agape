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

	const { data } = await useAsyncData('testimonials', () =>
		queryContent('testimonnials').find()
	)

	const spaceBetween = 32
</script>

<template>
	<div
		class="full-width aspect-[8/9] sm:aspect-[8/5] md:aspect-[8/5] lg:aspect-[16/8] xl:aspect-[16/7] bg-no-repeat bg-cover bg-center md:bg-top bg-[url(/homeHero.png)] grid place-content-center"
	>
		<div class="content-grid space-y-4 mt-[96px]">
			<h1 class="editable homeh1 text-white">
				We help <span>you</span> pass the bar
			</h1>
			<!-- <p class="text-white">Personalized service with proven results</p> -->
			<div class="flex items-center gap-2">
				<!-- <button
					color="black"
					variant="solid"
					class=""
					size="xl"
					label="find out how"
				/>
				<button
					color="red"
					variant="solid"
					:block="false"
					size="xl"
					label="Apply Now"
				/> -->
			</div>
		</div>
	</div>

	<section class="flex gap-4 flex-col md:flex-row">
		<h2 class="editable">Our <span> service </span></h2>
		<p class="max-w-[75ch]">
			Agape Christian Bar Prep offers many services to help students prepare for
			success in law school and on the bar exam.  Our services are customized to
			clearly identify and meet the individual needs of law students and law
			school graduates.
		</p>
	</section>

	<section
		class="grid grid-flow-row gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
	>
		<div class="flex flex-col">
			<h3 class="editable text-2xl">Bar Prep</h3>

			<p class="editable text-base">
				Preparing for the bar exam can be challenging, but Agape Christian Bar
				Prep provides a supportive learning environment and strategic plan to
				help you succeed.
			</p>

			<Button as-child>
				<NuxtLink class="flex items-center">
					Learn more
					<div class="i-heroicons-chevron-right text-2xl"></div>
				</NuxtLink>
			</Button>
		</div>
		<div class="flex flex-col">
			<h3 class="editable text-2xl">Law School Exam Prep</h3>

			<p class="editable text-base">
				Ease the anxiety of law school and law school exams and reach your full
				potential academically with our expert help.
			</p>

			<Button as-child>
				<NuxtLink class="flex items-center">
					Learn more
					<div class="i-heroicons-chevron-right text-2xl"></div>
				</NuxtLink>
			</Button>
		</div>
		<div class="flex flex-col">
			<h3 class="editable text-2xl">Consultations</h3>

			<p class="editable text-base">
				Agape Christian Bar Prep offers many services to help students prepare
				for success in law school and on the bar exam.
			</p>

			<Button as-child>
				<NuxtLink class="flex items-center">
					Learn more
					<div class="i-heroicons-chevron-right text-2xl"></div>
				</NuxtLink>
			</Button>
		</div>
	</section>

	<section class="flex gap-4 flex-col md:flex-row">
		<h2 class="editable">
			How our Program is
			<span> diffrent</span>
		</h2>
		<p class="editable">
			Agape Christian Bar Prep helps students prepare to pass the bar exam
			through personalized services that offer a holistic approach to bar exam
			preparation. Our program is uniquely designed to meet the individual
			spiritual, mental, emotional and academic needs of students while
			simultaneously empowering them to conquer the bar exam and achieve their
			dreams of becoming attorneys.
		</p>
	</section>

	<section>
		<h2 class="editable">
			<span>Student</span>
			TESTIMONIALS
		</h2>

		<section class="breakout">
			<Swiper
				:modules="[SwiperEffectCreative]"
				:slides-per-view="1"
				:centered-slides="true"
				:autoplay="{
					delay: 500,
					disableOnInteraction: true
				}"
				:loop="true"
				:breakpoints="{
					'800': {
						slidesPerView: 2
					}
				}"
			>
				<SwiperSlide v-for="slide in data" :key="slide.title">
					<blockquote class="text-left p-8 text-base">
						<ContentRenderer :value="slide" />
						<footer class="text-right font-bold text-2xl">
							{{ slide.title }}
						</footer>
					</blockquote>
				</SwiperSlide>
				<SwiperControls />
			</Swiper>
		</section>
	</section>
</template>

<style>
	.hero {
		aspect-ratio: 5/8;
	}

	.homeh1 {
		font-size: clamp(3rem, calc(0.1rem + 8vw), 6.52rem);
	}
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
		.hero {
			aspect-ratio: 16/5;
		}
	}

	swiper-slide {
		transition: opacity 0.5s ease-in-out;
	}

	.swiper-wrapper {
		min-width: 100vh;
		width: 100vh;
	}

	.swiper-slide-prev {
		opacity: 0.2;
	}
	.swiper-slide-next {
		opacity: 0.2;
	}
</style>
