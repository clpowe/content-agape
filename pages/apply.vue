<script setup>
	import { z } from 'zod'

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

	const supabase = useSupabaseClient()
	const files = ref([])

	const communication = [
		{ label: 'Email', value: 'Email' },
		{ label: 'Phone', value: 'Phone' },
		{ label: 'Text', value: 'Text' }
	]

	const maritalStatus = [
		{ label: 'Married', value: 'Married' },
		{ label: 'Single', value: 'Single' },
		{ label: 'Widowed', value: 'Widowed' }
	]

	const tshirt = [
		{ label: 'xs', value: 'xs' },
		{ label: 'sm', value: 's' },
		{ label: 'md', value: 'md' },
		{ label: 'lg', value: 'lg' },
		{ label: 'xl', value: 'xl' },
		{ label: 'xxl', value: 'xxl' }
	]

	async function handleSubmit(formData) {
		await $fetch('/api/apply', {
			method: 'POST',
			body: formData
		})
		// 	formData.ms.EducationHistory.history.forEach(async (element) => {
		// 		const url = await upload(element.file)
		// 		files.value.push(url)
		// 	})

		// 	reset('Application')
		// }

		// async function upload(file) {
		// 	const uuid = crypto.randomUUID()
		// 	const { data, error } = await supabase.storage
		// 		.from('Agape')
		// 		.upload(uuid, file)
		// 	if (error) {
		// 		console.log(error)
		// 	} else {
		// 		return `https://nfsivlvxfmhroorykvak.supabase.co/storage/v1/object/public/Agape/${data.path}`
		// 	}
	}
</script>

<template>
	<InnerHero title="Apply Now" />
	<div>
		<!-- <FormKit
			type="form"
			:actions="false"
			@submit="handleSubmit"
			id="Application"
		>
			<FormKit type="multi-step" name="ms" tab-style="tab">
				<FormKit type="step" name="PersonalInformation">
					<FormKit type="text" label="Full Name" validation="required" />
					<FormKit type="text" label="Mailing Address" validation="required" />
					<FormKit
						type="email"
						label="Email Address"
						validation="required|email"
					/>
					<FormKit
						type="tel"
						label="Phone Number"
						placeholder="xxx-xxx-xxxx"
						validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
						:validation-messages="{
							matches: 'Phone number must be in the format xxx-xxx-xxxx'
						}"
						validation-visibility="dirty"
					/>
					<FormKit
						type="dropdown"
						label="Preferred Method of Communication"
						placeholder="Email"
						:options="communication"
					/>
					<FormKit
						type="dropdown"
						label="Marital Status"
						placeholder="Single"
						:options="maritalStatus"
						validation="required"
						:validation-messages="{
							matches:
								'This information is required to help us personalize the services we provide.'
						}"
						validation-visibility="dirty"
					/>
					<FormKit
						type="textarea"
						label="How many children do you have and what are their ages?"
						validation="required"
						validation-visibility="dirty"
						:validation-messages="{
							required:
								'This information is required to help us personalize the services we provide.'
						}"
					/>
					<FormKit
						type="textarea"
						label="Do you have any other obligations?"
						validation="required"
						help="Do you have obligations that could potentially take away from your study time such as caring for a sick family member, planned trips, etc.?  If so, please explain."
						validation-visibility="dirty"
						:validation-messages="{
							required:
								'This information is required to help us personalize the services we provide.'
						}"
					/>
					<FormKit
						type="dropdown"
						label="What is your T-Shirt Size"
						placeholder="MD - Medium"
						:options="tshirt"
					/>
				</FormKit>

				<FormKit type="step" name="EducationHistory">
					<FormKit
						type="text"
						label="What law school did you attend or what law school are you attending? "
						placeholder="University of South Florica"
					/>
					<FormKit
						type="text"
						label="What what year did you graduate or will you graduate?"
						placeholder="2024"
					/>

					<FormKit type="file" name="history" multiple="true"></FormKit>
					<template #stepNext>
						<FormKit type="submit" />
					</template>
				</FormKit>
			</FormKit>
			
		</FormKit> -->
	</div>
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
