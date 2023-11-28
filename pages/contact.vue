<template>
	<NuxtLayout>
		<h1 text-blue-300>Contact Us</h1>
		<p ma-[25ch]>
			If you are interested in learning more about our services or application
			process, please contact us at:
		</p>
		{{ errMsg }}
		<FormKit type="form" @submit="handleClick">
			<FormKit
				type="text"
				label="Full Name"
				name="name"
				validation="required"
			></FormKit>
			<FormKit
				type="email"
				label="Email"
				name="email"
				validation="required"
			></FormKit>
			<FormKit
				type="textarea"
				label="Message"
				name="message"
				validation="required"
			></FormKit>
		</FormKit>
	</NuxtLayout>
</template>

<script setup>
	const errMsg = ref('')

	async function handleClick(formdata) {
		const data = await $fetch('/api/apply', {
			method: 'POST',
			body: formdata
		}).catch((error) => {
			console.log(error)
			errMsg.value = error.statusMessage
		})
	}
</script>

<style scoped></style>
