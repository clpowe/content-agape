<script setup lang="ts">
	import { Button } from '../components/ui/button'

	const success = ref(false)
	const open = ref(false)
</script>

<template>
	<ClientOnly>
		<Sheet v-model:open="open">
			<SheetTrigger>
				<Button class="rounded-full text-white" variant="secondary">
					contact
				</Button>
			</SheetTrigger>
			<SheetContent side="bottom">
				<div class="max-w-xl mx-auto">
					<SheetHeader>
						<div flex justify-between gap-4>
							<div text-left>
								<SheetTitle>Contact Agape</SheetTitle>

								<SheetDescription class="max-w-lg">
									We would love to talk with you about your future in law.
								</SheetDescription>
							</div>
							<SheetClose class="text-primary"> close </SheetClose>
						</div>
					</SheetHeader>
				</div>
				<div class="max-w-xl mx-auto" v-if="!success">
					<ContactForm />
				</div>
				<div v-else>We will contact you soon</div>
			</SheetContent>
		</Sheet>
	</ClientOnly>
</template>
