<script setup>
	import { Button } from '../components/ui/button'
	const { data } = await useAsyncData('instructors', () =>
		queryContent('instructors').sort({ title: -1 }).find()
	)

	const accordion = ref(null)

	function handleClick(e) {
		const activePanel = e.target.closest('.accordion-panel')
		if (!activePanel) return
		toogleAcordion(activePanel)
	}

	function toogleAcordion(panelToActivate) {
		const buttons = panelToActivate.parentElement.querySelectorAll('button')
		const contents =
			panelToActivate.parentElement.querySelectorAll('.accordion-content')

		buttons.forEach((button) => {
			button.setAttribute('aria-expanded', false)
		})
		contents.forEach((content) => {
			content.setAttribute('aria-hidden', true)
		})

		panelToActivate.querySelector('button').setAttribute('aria-expanded', true)
		panelToActivate
			.querySelector('.accordion-content')
			.setAttribute('aria-hidden', false)
	}
</script>

<template>
	<InnerHero title="About Agape" />
	<div>
		<div class="flow">
			<h2 class="editable">About Agape <span>Christian</span>Bar Prep</h2>
			<p class="editable">
				Our mission at Agape Christian Bar Prep is to inspire and foster the
				learning of law students globally and empower them along their journey
				to esquire and beyond, while sharing the love, comfort and compassion of
				Jesus Christ. To this end, we offer tutoring and bar exam preparation
				services to help students prepare for success in law school and on the
				bar exam. We specialize in helping students overcome psychological,
				environmental and programmatic barriers to learning so they can fully
				develop their intellectual potential.
			</p>
			<p class="editable">
				Agape Christian Bar Prep is committed to creating a supportive and
				personalized learning environment to help students thrive and excel
				academically. Integrated into our programs is an accountability system
				to help students set goals, measure their individual progress and
				improve where necessary. Our students receive customized learning plans
				to help them develop the independent learning, time management and
				prioritization skills needed to adequately prepare for the bar exam.
			</p>
			<h2>The <span>history</span>of Agape Christian Bar prep</h2>
			<p>
				Agape Christian Bar Prep was started in 2015 after our founder received
				instructions from God to “help His people”. Since that time, God has
				used Agape Christian Bar Prep to help students prepare for law school
				exams and pass the bar exam in jurisdictions across the United States.
				With God’s help, Agape Christian Bar Prep builds and restores the
				confidence, hope and vision of students whose dreams of becoming
				attorneys have been shattered by their law school experience or multiple
				failed attempts at passing the bar exam. God uses Agape Christian Bar
				Prep to remind these students of the thoughts and plans He has for them
				– thoughts of peace, and not of evil, to give them an expected end.
			</p>
			<h2>The Path to <span>Esquire</span></h2>
			<!-- <ol>
				<li>
					<p>
						Students interested in enrolling in one of our tutoring programs or
						writing courses must complete an application. Our team members
						review each student’s application and create a personal plan for
						success for that student.
					</p>
				</li>
				<li>
					<p>
						Students accepted into one of our tutoring programs must attend a
						week long orientation to help them prepare mentally and emotionally
						for the rigors and stresses of bar prep. Students must also sign a
						student commitment agreement.
					</p>
				</li>
				<li>
					<p>
						Students accepted into one of our tutoring programs or writing
						courses are assigned tutors who will help guide them through the
						legal writing or bar exam preparation process, help them increase
						their understanding of substantive, and help them develop,
						strengthen and refine the analytical and writing skills needed to
						pass the bar exam and excel as an attorney.
					</p>
				</li>
			</ol> -->
			<article class="accordion-wrap">
				<div class="accordion" ref="accordion" @click="handleClick">
					<div class="accordion-panel">
						<h3 id="panel1-heading">
							<button
								class="accordion-trigger"
								aria-controls="panel1-content"
								aria-expanded="true"
							>
								<span id="panel1-title" class="accordion-title"> Step 1 </span>
								<div
									aria-hidden="true"
									class="i-heroicons-chevron-down accordion-icon"
								></div>
							</button>
						</h3>
						<div
							class="accordion-content"
							id="panel1-content"
							aria-labelledby="panel1-heading"
							aria-hidden="false"
							role="region"
						>
							<p class="editable">
								Students interested in enrolling in one of our tutoring programs
								or writing courses must complete an application. Our team
								members review each student’s application and create a personal
								plan for success for that student.
							</p>
						</div>
					</div>
					<div class="accordion-panel">
						<h3 id="panel2-heading">
							<button
								class="accordion-trigger"
								aria-controls="panel2-content"
								aria-expanded="fale"
							>
								<span id="panel2-title" class="accordion-title"> Step 2 </span>
								<div
									aria-hidden="true"
									class="i-heroicons-chevron-down accordion-icon"
								></div>
							</button>
						</h3>
						<div
							class="accordion-content"
							id="panel2-content"
							aria-labelledby="panel2-heading"
							aria-hidden="true"
							role="region"
						>
							<p class="editable">
								Students accepted into one of our tutoring programs must attend
								a week long orientation to help them prepare mentally and
								emotionally for the rigors and stresses of bar prep. Students
								must also sign a student commitment agreement.
							</p>
						</div>
					</div>
					<div class="accordion-panel">
						<h3 id="panel3-heading">
							<button
								class="accordion-trigger"
								aria-controls="panel3-content"
								aria-expanded="false"
							>
								<span id="panel1-title" class="accordion-title"> Step 3 </span>
								<div
									aria-hidden="true"
									class="i-heroicons-chevron-down accordion-icon"
								></div>
							</button>
						</h3>
						<div
							class="accordion-content"
							id="panel1-content"
							aria-labelledby="panel3-heading"
							aria-hidden="true"
							role="region"
						>
							<p class="editable">
								Students interested in enrolling in one of our tutoring programs
								or writing courses must complete an application. Our team
								members review each student’s application and create a personal
								plan for success for that student.
							</p>
						</div>
					</div>
				</div>
			</article>

			<h2>About our <span>Teachers</span></h2>
			<p>
				Agape Christian Bar Prep's tutors are compassionate, patient, kind and
				whole-heartedly committed to helping students exceed their personal and
				professional goals. Many of our tutors are first generation college and
				law school graduates who have experience in the areas they teach. As an
				advantage, our students have direct access to tutors who readily
				identify with the challenges related to overcoming barriers and
				exclusion issues associated with acceptance to the bar. Our tutors are
				uniquely positioned to mentor students who are new to the dynamics of
				legal academia and the legal profession.
			</p>
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
				<TeacherCard
					v-for="teacher in data"
					:key="teacher.title"
					:name="teacher.title"
					:image="teacher.image"
					:role="teacher.position"
					:link="teacher._path"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.team-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.accordion-wrap {
		margin-inline: auto;
	}

	.accordion {
		--button-size: 2rem;
		--panel-padding: 0.75rem;
		--timing: 500ms;
		--pannel-gap: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (min-width: 45em) {
		.accordion {
			flex-direction: row;
			height: 25rem;
		}
	}
	.accordion * {
		margin: 0;
	}

	.accordion-panel {
		position: relative;
		flex-basis: calc(var(--panel-padding) * 2 + var(--button-size));
		overflow: hidden;
		padding: var(--panel-padding);
		padding-right: calc(var(--panel-padding) * 4);

		border-radius: calc((var(--panel-padding) * 2 + var(--button-size)) / 2);
		border: 1px solid #333;

		transition: flex-basis var(--timing);
	}

	@media (perfers-reduced-motion: no-preference) {
		.accordion-panel {
			transition: flex-basis var(--timing), flex-grow var(--timing);
		}
	}

	.accordion-panel:has([aria-expanded='true']) {
		flex-basis: clamp(15rem, 75vh, 30rem);
		flex-grow: 1;
	}

	.accordion-trigger {
		display: flex;
		align-items: center;
		gap: var(--pannel-gap);
		flex-direction: row-reverse;
		justify-content: space-between;
		border: 0;
		padding: 0;
		rotate: 0deg;
		transform-origin: 10%;

		transition: rotate var(--timing);
	}

	.accordion-panel:has([aria-expanded='true']) .accordion-trigger {
		rotate: 0deg;
	}

	@media (min-width: 45em) {
		.accordion-trigger {
			rotate: 90deg;
		}
	}

	.accordion-content {
		display: grid;

		width: 100%;
		height: 100%;
	}

	.accordion-content > p {
		transform: translateY(2rem);
		opacity: 0;
		margin-top: 1rem;
		transition: transform var(--timing) var(--timing),
			opacity var(--timing) var(--timing);

		margin-left: calc(var(--button-size) + var(--pannel-gap));
	}

	.accordion-panel:has([aria-expanded='true']) p {
		transform: translateY(0);
		opacity: 1;
	}

	@media (perfers-reduced-motion: no-preference) {
		.accordion-panel:has([aria-sxpanded='true']) p {
			transition: transform var(--timing) var(--timing),
				opacity var(--timing) var(--timing);
		}
	}
	.accordion-icon {
		width: var(--button-size);
		height: var(--button-size);
		aspect-ratio: 1/1;
	}

	.accordion-title {
		font-size: 1.5rem;
		font-weight: 700;
		white-space: nowrap;
		position: relative;
		isolation: isolate;

		display: grid;
		align-items: center;
	}

	@media (max-width: 44.999em) {
		.accordion-title::after {
			content: '';
			position: absolute;
			left: calc((var(--pannel-gap) + var(--button-size)) * -1);
			width: calc(100% + (var(--button-size) * 2));
			height: var(--button-size);
			/* background: hsl(0 0% 0% / 0.2); */
			z-index: -1;
			border-radius: 100vw;
		}
	}
</style>
