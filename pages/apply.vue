<script setup lang="ts">
	import { FormKitSchema } from '@formkit/vue'
	const formData = ref({
		username: 'christopher_io',
		password: ''
	})

	async function handleSubmit(data: any) {
		console.log(data)
	}
</script>

<template>
	<FormKit type="form" :actions="false">
		<FormKit type="multi-step" tab-style="progress">
			<FormKit type="step" name="Personal Information">
				<ApplyStepOne />
			</FormKit>
		</FormKit>
	</FormKit>
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
