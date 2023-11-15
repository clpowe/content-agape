<template>
	<NuxtLayout class="layouts">
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

	.content-grid {
		--padding-inline: 2rem;
		--content-max-width: 70ch;
		--breakout-max-width: 85ch;

		--breakout-size: calc(
			(var(--breakout-max-width) - var(--content-max-width)) / 2
		);

		display: grid;
		grid-template-columns:
			[full-width-start] minmax(var(--padding-inline), 1fr)
			[breakout-start] minmax(0, var(--breakout-size))
			[content-start] min(
				100% - var(--padding-inline) * 2,
				var(--content-max-width)
			)
			[content-end]
			minmax(0, var(--breakout-size)) [breakout-end]
			minmax(var(--padding-inline), 1fr) [full-width-end];
	}

	.content-grid > *,
	.full-width > * {
		grid-column: content;
	}

	.content-grid > .breakout {
		grid-column: breakout;
	}

	.content-grid > .full-width {
		grid-column: full-width;
	}

	img.full-width {
		width: 100%;
		max-height: 45vh;
		object-fit: cover;
	}

	:root {
		--color-scheme: dark;

		--font-family: 'Inter', sans-serif;

		--fs-300: clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem);
		--fs-400: clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem);
		--fs-500: clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem);
		--fs-600: clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem);
		--fs-700: clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem);
		--fs-800: clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem);
		--fs-900: clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem);

		--clr-primary-300: hsl(219, 76%, 55%);
		--clr-primary-400: hsl(219, 76%, 40%);
		--clr-primary-500: hsl(219, 76%, 25%);
		--clr-secondary-300: hsl(358, 90%, 45%);
		--clr-secondary-400: hsl(358, 90%, 30%);
		--clr-secondary-500: hsl(358, 90%, 15%);
		--clr-accent-200: hsl(358, 85%, 80%);
		--clr-accent-300: hsl(358, 72%, 65%);
		--clr-accent-400: hsl(358, 72%, 50%);
		--clr-accent-500: hsl(358, 72%, 35%);
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	figure {
		margin: 0;
	}

	body {
		margin: 0;
		font-family: var(--font-family);
		font-size: var(--fs-400);
		line-height: 1.6;
	}

	.site-title {
		margin: 0;
		font-size: var(--fs-900);
		line-height: 0.9;
		text-transform: uppercase;
		font-weight: 900;
		text-wrap: balance;
	}

	h1 {
		font-size: var(--fs-900);
		line-height: 0.9;
		text-wrap: balance;
		font-weight: 900;
		text-transform: uppercase;
	}

	h2,
	.section-title {
		font-size: var(--fs-800);
		line-height: 0.9;
		text-wrap: balance;
		font-weight: 900;
		text-transform: uppercase;
	}

	.text-red {
		color: var(--clr-secondary-400);
	}

	.bg-primary {
		background: var(--clr-primary-500);
	}

	.margin-none {
		margin: 0;
	}
</style>
