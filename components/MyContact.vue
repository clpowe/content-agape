<script setup lang="ts">
	import { useStorage } from '@vueuse/core'
	import { useForm } from 'vee-validate'
	import { toTypedSchema } from '@vee-validate/zod'
	import * as z from 'zod'
	import { Button } from '../components/ui/button'
	import {
		FormControl,
		FormDescription,
		FormField,
		FormItem,
		FormLabel,
		FormMessage
	} from '../components/ui/form'
	import { Input } from '@/components/ui/input'
	import { Textarea } from '@/components/ui/textarea'

	const formSchema = toTypedSchema(
		z.object({
			name: z.string().min(1, { message: 'Email is required' }),
			email: z
				.string()
				.min(1, { message: 'Email is required' })
				.email({ message: 'Please enter a valid email "xxx@xxx.xxx"' }),
			message: z.string().min(1, { message: 'Message is required' }).max(15, {
				message: 'Bio must be at least 10 characters.'
			})
		})
	)

	const state = useStorage('my-contact', { name: '', email: '', message: '' })
	const success = ref(false)

	const { handleSubmit } = useForm({
		validationSchema: formSchema
	})

	const onSubmit = handleSubmit(async (values) => {
		const { data: responseData } = await useFetch('/api/contact', {
			method: 'POST',
			body: values
		})

		if (responseData.value?.success) {
			success.value = true
		}

		console.log(responseData.value)

		open.value = false
		state.value.name = ''
		state.value.email = ''
		state.value.message = ''
	})

	const open = ref(false)
</script>

<template>
	<Sheet v-model:open="open">
		<SheetTrigger>
			<Button class="rounded-full text-white" variant="secondary">
				contact
			</Button>
		</SheetTrigger>
		<SheetContent side="bottom">
			<div class="max-w-xl mx-auto">
				<SheetHeader>
					<SheetTitle>Contact Agape</SheetTitle>
					<SheetDescription>
						We would love to talk with you about your future in law.
					</SheetDescription>
				</SheetHeader>
			</div>
			<div class="max-w-xl mx-auto" v-if="!success">
				<form @submit="onSubmit" class="flex flex-col gap-4">
					<FormField
						v-slot="{ componentField }"
						name="name"
						v-model="state.name"
					>
						<FormItem>
							<FormLabel>Your name</FormLabel>
							<FormControl>
								<Input
									type="name"
									placeholder="your name"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>
					<FormField
						v-slot="{ componentField }"
						name="email"
						v-model="state.email"
					>
						<FormItem>
							<FormLabel>Your email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="your email"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>
					<FormField
						v-slot="{ componentField }"
						name="message"
						v-model="state.message"
					>
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell us a little bit about yourself"
									class="resize-none"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>
					<Button> Submit </Button>
				</form>
			</div>
			<div v-else>We will contact you soon</div>
		</SheetContent>
	</Sheet>
</template>
