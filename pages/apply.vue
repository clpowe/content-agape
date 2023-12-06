<script setup>
	import { createZodPlugin } from '@formkit/zod'
	import { z } from 'zod'

	const supabase = useSupabaseClient()
	const files = ref([])
	import { reset } from '@formkit/core'

	async function handleSubmit(formData) {
		// console.log(formData.ms.EducationHistory.history)
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
	<div>
		<FormKit
			type="form"
			:actions="false"
			@submit="handleSubmit"
			id="Application"
		>
			<FormKit type="multi-step" name="ms" tab-style="progress">
				<FormKit type="step" name="PersonalInformation">
					<FormKit type="text" label="Full Name" validation="required" />
				</FormKit>
				<FormKit type="step" name="EducationHistory">
					<FormKit type="file" name="history" multiple="true"></FormKit>
					<template #stepNext>
						<FormKit type="submit" />
					</template>
				</FormKit>
			</FormKit>
			<!-- <details>
				<summary>Form data</summary>
				<pre>{{ value.ms }}</pre>
			</details> -->
		</FormKit>
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
