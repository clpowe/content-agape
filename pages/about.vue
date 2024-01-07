<script setup>
	const { data } = await useAsyncData('teachers', () =>
		queryContent('teachers').find()
	)
</script>

<template>
	<h2 class="editable">About Agape <span>Christian</span>Bar Prep</h2>
	<p class="editable">
		Our mission at Agape Christian Bar Prep is to inspire and foster the
		learning of law students globally and empower them along their journey to
		esquire and beyond, while sharing the love, comfort and compassion of Jesus
		Christ. To this end, we offer tutoring and bar exam preparation services to
		help students prepare for success in law school and on the bar exam. We
		specialize in helping students overcome psychological, environmental and
		programmatic barriers to learning so they can fully develop their
		intellectual potential.
	</p>
	<p class="editable">
		Agape Christian Bar Prep is committed to creating a supportive and
		personalized learning environment to help students thrive and excel
		academically. Integrated into our programs is an accountability system to
		help students set goals, measure their individual progress and improve where
		necessary. Our students receive customized learning plans to help them
		develop the independent learning, time management and prioritization skills
		needed to adequately prepare for the bar exam.
	</p>
	<h2>The <span>history</span>of Agape Christian Bar prep</h2>
	<p>
		Agape Christian Bar Prep was started in 2015 after our founder received
		instructions from God to “help His people”. Since that time, God has used
		Agape Christian Bar Prep to help students prepare for law school exams and
		pass the bar exam in jurisdictions across the United States. With God’s
		help, Agape Christian Bar Prep builds and restores the confidence, hope and
		vision of students whose dreams of becoming attorneys have been shattered by
		their law school experience or multiple failed attempts at passing the bar
		exam. God uses Agape Christian Bar Prep to remind these students of the
		thoughts and plans He has for them – thoughts of peace, and not of evil, to
		give them an expected end.
	</p>
	<h2>The Path to <span>Esquire</span></h2>
	<ol>
		<li>
			<p>
				Students interested in enrolling in one of our tutoring programs or
				writing courses must complete an application. Our team members review
				each student’s application and create a personal plan for success for
				that student.
			</p>
		</li>
		<li>
			<p>
				Students accepted into one of our tutoring programs must attend a week
				long orientation to help them prepare mentally and emotionally for the
				rigors and stresses of bar prep. Students must also sign a student
				commitment agreement.
			</p>
		</li>
		<li>
			<p>
				Students accepted into one of our tutoring programs or writing courses
				are assigned tutors who will help guide them through the legal writing
				or bar exam preparation process, help them increase their understanding
				of substantive, and help them develop, strengthen and refine the
				analytical and writing skills needed to pass the bar exam and excel as
				an attorney.
			</p>
		</li>
	</ol>
	<h2>About our <span>Teachers</span></h2>
	<p>
		Agape Christian Bar Prep's tutors are compassionate, patient, kind and
		whole-heartedly committed to helping students exceed their personal and
		professional goals. Many of our tutors are first generation college and law
		school graduates who have experience in the areas they teach. As an
		advantage, our students have direct access to tutors who readily identify
		with the challenges related to overcoming barriers and exclusion issues
		associated with acceptance to the bar. Our tutors are uniquely positioned to
		mentor students who are new to the dynamics of legal academia and the legal
		profession.
	</p>
	<div class="team-container">
		<TeacherCard
			v-for="teacher in data"
			:key="teacher.title"
			:name="teacher.title"
			:image="teacher.image"
			:role="teacher.position"
			:link="teacher._path"
		/>
	</div>
</template>

<style scoped>
	.team-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
