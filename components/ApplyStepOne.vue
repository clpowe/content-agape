<script setup>
	const methods = [
		{ label: 'email', value: 'email' },
		{ label: 'phone', value: 'phone' },
		{ label: 'text', value: 'text' }
	]
	const status = [
		{ label: 'married', value: 'married' },
		{ label: 'single', value: 'single' },
		{ label: 'widowed', value: 'widowed' }
	]
</script>

<template>
	<div>
		<FormKit type="text" label="Full Name" validation="required" />
		<FormKit type="text" label="Mail Address" validation="required" />
		<!-- <FormKit
			type="email"
			label="Perferred Email Address"
			prefix-icon="email"
			validation="required | email"
		/>
		<FormKit
			type="mask"
			label="Cell Phone Number"
			mask="(###) ###-####"
			prefix-icon="telephone"
			validation="required"
		/>

		<FormKit
			type="dropdown"
			label="Preferred Method of Communication"
			:options="methods"
			validation="required"
		/>
		<FormKit
			type="dropdown"
			label="Marital Status"
			:options="status"
			validation="required"
		/>

		<FormKit
			type="textarea"
			label="Number of Children and Their Ages"
			placeholder="How many children do you have and what are their ages?"
			validation="required"
		/>
		<FormKit
			type="textarea"
			label="Other Obligations Explanation"
			validation="required"
		/>
		<FormKit
			type="text"
			label="What is your t-shirt size?"
			validation="required"
		/>
		<FormKit
			type="textarea"
			label="How did you hear about Agape Christian Bar Prep?"
			validation="required"
		/> -->
	</div>
</template>

<style lang="scss" scoped></style>
