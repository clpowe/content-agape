<template>
	<div>
		<div v-if="pending">
			<Alert>
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					We will be in contact with you soon.
				</AlertDescription>
			</Alert>
			<Button
				class="rounded-full text-white"
				variant="secondary"
				@click="reset"
			>
				reset
			</Button>
		</div>
		<div v-if="error">
			<Alert>
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					Something seems to have gone wrong. Please try again
				</AlertDescription> </Alert
			><Button
				class="rounded-full text-white"
				variant="secondary"
				@click="reset"
			>
				reset
			</Button>
		</div>
		<div v-if="success">
			Success<Button
				class="rounded-full text-white"
				variant="secondary"
				@click="reset"
			>
				reset
			</Button>
		</div>
		<Vueform v-bind="vueform" v-model="form" sync :endpoint="submit" v-else />
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import { useStorage } from '@vueuse/core'
	import { Button } from '../components/ui/button'

	import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

	const form = useStorage('form', {})

	const vueform = ref({
		method: 'POST',
		endpoint: '/api/contact',
		formKey: 'contact',
		size: 'lg',
		addClass: 'vf-my-form',
		schema: {
			'Your Name': {
				type: 'text',
				placeholder: 'Enter Your Full Name',
				label: 'Your name',
				rules: ['required'],
				fieldName: 'name',
				floating: false
			},
			'Your email': {
				type: 'text',
				label: 'Your email',
				inputType: 'email',
				placeholder: 'Enter Your Email',
				rules: ['required'],
				fieldName: 'email',
				floating: false
			},
			phone: {
				type: 'text',
				inputType: 'tel',
				fieldName: 'phone',
				label: 'Phone'
			},
			Message: {
				type: 'textarea',
				label: 'Message',
				placeholder: 'How can we help you?',
				fieldName: 'message',
				rules: ['required']
			},
			hidden: {
				type: 'hidden',
				fieldName: 'hidden'
			},
			submit: {
				type: 'button',
				buttonLabel: 'Submit',
				submits: true
			}
		}
	})

	const pending = ref(false)
	const error = ref(false)
	const success = ref(false)

	function reset() {
		pending.value = false
		error.value = false
		success.value = false
	}

	async function submit(FormData, form$) {
		pending.value = true
		const res = await $fetch('/api/contact', {
			method: 'POST',
			body: FormData
		})
		if (res.status === 200) {
			pending.value = false
			success.value = true

			form.value = {}
		}
	}
</script>

<style>
	.vf-my-form *,
	.vf-my-form *:before,
	.vf-my-form *:after,
	.vf-my-form:root {
		--vf-primary: #940a00;
		--vf-primary-darker: #750800;
		--vf-color-on-primary: #ffffff;
		--vf-danger: #ef4444;
		--vf-danger-lighter: #fee2e2;
		--vf-success: #10b981;
		--vf-success-lighter: #d1fae5;
		--vf-gray-50: #f9fafb;
		--vf-gray-100: #f3f4f6;
		--vf-gray-200: #e5e7eb;
		--vf-gray-300: #d1d5db;
		--vf-gray-400: #9ca3af;
		--vf-gray-500: #6b7280;
		--vf-gray-600: #4b5563;
		--vf-gray-700: #374151;
		--vf-gray-800: #1f2937;
		--vf-gray-900: #111827;
		--vf-ring-width: 2px;
		--vf-ring-color: #940a00;
		--vf-link-color: var(--vf-primary);
		--vf-link-decoration: inherit;
		--vf-font-size: 1rem;
		--vf-font-size-sm: 0.875rem;
		--vf-font-size-lg: 1rem;
		--vf-font-size-small: 0.875rem;
		--vf-font-size-small-sm: 0.8125rem;
		--vf-font-size-small-lg: 0.875rem;
		--vf-font-size-h1: 2.125rem;
		--vf-font-size-h1-sm: 2.125rem;
		--vf-font-size-h1-lg: 2.125rem;
		--vf-font-size-h2: 1.875rem;
		--vf-font-size-h2-sm: 1.875rem;
		--vf-font-size-h2-lg: 1.875rem;
		--vf-font-size-h3: 1.5rem;
		--vf-font-size-h3-sm: 1.5rem;
		--vf-font-size-h3-lg: 1.5rem;
		--vf-font-size-h4: 1.25rem;
		--vf-font-size-h4-sm: 1.25rem;
		--vf-font-size-h4-lg: 1.25rem;
		--vf-font-size-h1-mobile: 1.5rem;
		--vf-font-size-h1-mobile-sm: 1.5rem;
		--vf-font-size-h1-mobile-lg: 1.5rem;
		--vf-font-size-h2-mobile: 1.25rem;
		--vf-font-size-h2-mobile-sm: 1.25rem;
		--vf-font-size-h2-mobile-lg: 1.25rem;
		--vf-font-size-h3-mobile: 1.125rem;
		--vf-font-size-h3-mobile-sm: 1.125rem;
		--vf-font-size-h3-mobile-lg: 1.125rem;
		--vf-font-size-h4-mobile: 1rem;
		--vf-font-size-h4-mobile-sm: 1rem;
		--vf-font-size-h4-mobile-lg: 1rem;
		--vf-font-size-blockquote: 1rem;
		--vf-font-size-blockquote-sm: 0.875rem;
		--vf-font-size-blockquote-lg: 1rem;
		--vf-line-height: 1.5rem;
		--vf-line-height-sm: 1.25rem;
		--vf-line-height-lg: 1.5rem;
		--vf-line-height-small: 1.25rem;
		--vf-line-height-small-sm: 1.125rem;
		--vf-line-height-small-lg: 1.25rem;
		--vf-line-height-headings: 1.2;
		--vf-line-height-headings-sm: 1.2;
		--vf-line-height-headings-lg: 1.2;
		--vf-line-height-blockquote: 1.5rem;
		--vf-line-height-blockquote-sm: 1.25rem;
		--vf-line-height-blockquote-lg: 1.5rem;
		--vf-letter-spacing: 0px;
		--vf-letter-spacing-sm: 0px;
		--vf-letter-spacing-lg: 0px;
		--vf-letter-spacing-small: 0px;
		--vf-letter-spacing-small-sm: 0px;
		--vf-letter-spacing-small-lg: 0px;
		--vf-letter-spacing-headings: 0px;
		--vf-letter-spacing-headings-sm: 0px;
		--vf-letter-spacing-headings-lg: 0px;
		--vf-letter-spacing-blockquote: 0px;
		--vf-letter-spacing-blockquote-sm: 0px;
		--vf-letter-spacing-blockquote-lg: 0px;
		--vf-gutter: 1rem;
		--vf-gutter-sm: 0.5rem;
		--vf-gutter-lg: 1rem;
		--vf-min-height-input: 2.375rem;
		--vf-min-height-input-sm: 2.125rem;
		--vf-min-height-input-lg: 2.875rem;
		--vf-py-input: 0.375rem;
		--vf-py-input-sm: 0.375rem;
		--vf-py-input-lg: 0.625rem;
		--vf-px-input: 0.75rem;
		--vf-px-input-sm: 0.5rem;
		--vf-px-input-lg: 0.875rem;
		--vf-py-btn: 0.375rem;
		--vf-py-btn-sm: 0.375rem;
		--vf-py-btn-lg: 0.625rem;
		--vf-px-btn: 0.875rem;
		--vf-px-btn-sm: 0.75rem;
		--vf-px-btn-lg: 1.25rem;
		--vf-py-btn-small: 0.25rem;
		--vf-py-btn-small-sm: 0.25rem;
		--vf-py-btn-small-lg: 0.375rem;
		--vf-px-btn-small: 0.625rem;
		--vf-px-btn-small-sm: 0.625rem;
		--vf-px-btn-small-lg: 0.75rem;
		--vf-py-group-tabs: 0.375rem;
		--vf-py-group-tabs-sm: 0.375rem;
		--vf-py-group-tabs-lg: 0.625rem;
		--vf-px-group-tabs: 0.75rem;
		--vf-px-group-tabs-sm: 0.5rem;
		--vf-px-group-tabs-lg: 0.875rem;
		--vf-py-group-blocks: 0.75rem;
		--vf-py-group-blocks-sm: 0.625rem;
		--vf-py-group-blocks-lg: 0.875rem;
		--vf-px-group-blocks: 1rem;
		--vf-px-group-blocks-sm: 1rem;
		--vf-px-group-blocks-lg: 1rem;
		--vf-py-tag: 0px;
		--vf-py-tag-sm: 0px;
		--vf-py-tag-lg: 0px;
		--vf-px-tag: 0.4375rem;
		--vf-px-tag-sm: 0.4375rem;
		--vf-px-tag-lg: 0.4375rem;
		--vf-py-slider-tooltip: 0.125rem;
		--vf-py-slider-tooltip-sm: 0.0625rem;
		--vf-py-slider-tooltip-lg: 0.1875rem;
		--vf-px-slider-tooltip: 0.375rem;
		--vf-px-slider-tooltip-sm: 0.3125rem;
		--vf-px-slider-tooltip-lg: 0.5rem;
		--vf-py-blockquote: 0.25rem;
		--vf-py-blockquote-sm: 0.25rem;
		--vf-py-blockquote-lg: 0.25rem;
		--vf-px-blockquote: 0.75rem;
		--vf-px-blockquote-sm: 0.75rem;
		--vf-px-blockquote-lg: 0.75rem;
		--vf-py-hr: 0.25rem;
		--vf-space-addon: 0px;
		--vf-space-addon-sm: 0px;
		--vf-space-addon-lg: 0px;
		--vf-space-checkbox: 0.375rem;
		--vf-space-checkbox-sm: 0.375rem;
		--vf-space-checkbox-lg: 0.375rem;
		--vf-space-tags: 0.1875rem;
		--vf-space-tags-sm: 0.1875rem;
		--vf-space-tags-lg: 0.1875rem;
		--vf-space-static-tag-1: 1rem;
		--vf-space-static-tag-2: 2rem;
		--vf-space-static-tag-3: 3rem;
		--vf-floating-top: 0rem;
		--vf-floating-top-sm: 0rem;
		--vf-floating-top-lg: 0.6875rem;
		--vf-bg-input: #ffffff;
		--vf-bg-input-hover: #ffffff;
		--vf-bg-input-focus: #ffffff;
		--vf-bg-input-danger: #ffffff;
		--vf-bg-input-success: #ffffff;
		--vf-bg-disabled: var(--vf-gray-200);
		--vf-bg-selected: #1118270d;
		--vf-bg-passive: var(--vf-gray-300);
		--vf-bg-icon: var(--vf-gray-500);
		--vf-bg-danger: var(--vf-danger-lighter);
		--vf-bg-success: var(--vf-success-lighter);
		--vf-bg-tag: var(--vf-primary);
		--vf-bg-slider-handle: var(--vf-primary);
		--vf-bg-toggle-handle: #ffffff;
		--vf-bg-date-head: var(--vf-gray-100);
		--vf-bg-addon: #ffffff00;
		--vf-bg-btn: var(--vf-primary);
		--vf-bg-btn-danger: var(--vf-danger);
		--vf-bg-btn-secondary: var(--vf-gray-200);
		--vf-color-input: var(--vf-gray-800);
		--vf-color-input-hover: var(--vf-gray-800);
		--vf-color-input-focus: var(--vf-gray-800);
		--vf-color-input-danger: var(--vf-gray-800);
		--vf-color-input-success: var(--vf-gray-800);
		--vf-color-disabled: var(--vf-gray-400);
		--vf-color-placeholder: var(--vf-gray-300);
		--vf-color-passive: var(--vf-gray-700);
		--vf-color-muted: var(--vf-gray-500);
		--vf-color-floating: var(--vf-gray-500);
		--vf-color-floating-focus: var(--vf-gray-500);
		--vf-color-floating-success: var(--vf-gray-500);
		--vf-color-floating-danger: var(--vf-gray-500);
		--vf-color-danger: var(--vf-danger);
		--vf-color-success: var(--vf-success);
		--vf-color-tag: var(--vf-color-on-primary);
		--vf-color-addon: var(--vf-gray-800);
		--vf-color-date-head: var(--vf-gray-700);
		--vf-color-btn: var(--vf-color-on-primary);
		--vf-color-btn-danger: #ffffff;
		--vf-color-btn-secondary: var(--vf-gray-700);
		--vf-border-color-input: var(--vf-gray-300);
		--vf-border-color-input-hover: var(--vf-gray-300);
		--vf-border-color-input-focus: var(--vf-primary);
		--vf-border-color-input-danger: var(--vf-gray-300);
		--vf-border-color-input-success: var(--vf-gray-300);
		--vf-border-color-checked: var(--vf-primary);
		--vf-border-color-passive: var(--vf-gray-300);
		--vf-border-color-slider-tooltip: var(--vf-primary);
		--vf-border-color-tag: var(--vf-primary);
		--vf-border-color-btn: var(--vf-primary);
		--vf-border-color-btn-danger: var(--vf-danger);
		--vf-border-color-btn-secondary: var(--vf-gray-200);
		--vf-border-color-blockquote: var(--vf-gray-300);
		--vf-border-color-hr: var(--vf-gray-300);
		--vf-border-width-input-t: 1px;
		--vf-border-width-input-r: 1px;
		--vf-border-width-input-b: 1px;
		--vf-border-width-input-l: 1px;
		--vf-border-width-radio-t: 1px;
		--vf-border-width-radio-r: 1px;
		--vf-border-width-radio-b: 1px;
		--vf-border-width-radio-l: 1px;
		--vf-border-width-checkbox-t: 1px;
		--vf-border-width-checkbox-r: 1px;
		--vf-border-width-checkbox-b: 1px;
		--vf-border-width-checkbox-l: 1px;
		--vf-border-width-dropdown: 1px;
		--vf-border-width-btn: 1px 1px 1px 1px;
		--vf-border-width-toggle: 0.125rem;
		--vf-border-width-tag: 1px;
		--vf-border-width-blockquote: 3px;
		--vf-shadow-input: 0px 0px 0px 0px rgba(0, 0, 0, 0);
		--vf-shadow-input-hover: 0px 0px 0px 0px rgba(0, 0, 0, 0);
		--vf-shadow-input-focus: 0px 0px 0px 0px rgba(0, 0, 0, 0);
		--vf-shadow-handles: 0px 0px 0px 0px rgba(0, 0, 0, 0);
		--vf-shadow-handles-hover: 0px 0px 0px 0px rgba(0, 0, 0, 0);
		--vf-shadow-handles-focus: 0px 0px 0px 0px rgba(0, 0, 0, 0);
		--vf-shadow-btn: 0px 0px 0px 0px rgba(0, 0, 0, 0);
		--vf-shadow-dropdown: 0px 0px 0px 0px rgba(0, 0, 0, 0);
		--vf-radius-input: 999999999px;
		--vf-radius-input-sm: 999999999px;
		--vf-radius-input-lg: 999999999999px;
		--vf-radius-btn: 99999999999999px;
		--vf-radius-btn-sm: 9999999999px;
		--vf-radius-btn-lg: 999999999999px;
		--vf-radius-small: 4px;
		--vf-radius-small-sm: 999999999px;
		--vf-radius-small-lg: 4px;
		--vf-radius-large: 4px;
		--vf-radius-large-sm: 4px;
		--vf-radius-large-lg: 1rem;
		--vf-radius-tag: 0.25rem;
		--vf-radius-tag-sm: 0.25rem;
		--vf-radius-tag-lg: 0.25rem;
		--vf-radius-checkbox: 0.25rem;
		--vf-radius-checkbox-sm: 0.25rem;
		--vf-radius-checkbox-lg: 0.25rem;
		--vf-radius-slider: 0.25rem;
		--vf-radius-slider-sm: 0.25rem;
		--vf-radius-slider-lg: 0.25rem;
		--vf-radius-image: 0.25rem;
		--vf-radius-image-sm: 0.25rem;
		--vf-radius-image-lg: 0.25rem;
		--vf-radius-gallery: 0.25rem;
		--vf-radius-gallery-sm: 0.25rem;
		--vf-radius-gallery-lg: 0.25rem;
		--vf-checkbox-size: 1rem;
		--vf-checkbox-size-sm: 0.875rem;
		--vf-checkbox-size-lg: 1rem;
		--vf-gallery-size: 6rem;
		--vf-gallery-size-sm: 5rem;
		--vf-gallery-size-lg: 7rem;
		--vf-toggle-width: 3rem;
		--vf-toggle-width-sm: 2.75rem;
		--vf-toggle-width-lg: 3rem;
		--vf-toggle-height: 1.25rem;
		--vf-toggle-height-sm: 1rem;
		--vf-toggle-height-lg: 1.25rem;
		--vf-slider-height: 0.375rem;
		--vf-slider-height-sm: 0.3125rem;
		--vf-slider-height-lg: 0.5rem;
		--vf-slider-height-vertical: 20rem;
		--vf-slider-height-vertical-sm: 20rem;
		--vf-slider-height-vertical-lg: 20rem;
		--vf-slider-handle-size: 1rem;
		--vf-slider-handle-size-sm: 0.875rem;
		--vf-slider-handle-size-lg: 1.25rem;
		--vf-slider-tooltip-distance: 0.5rem;
		--vf-slider-tooltip-distance-sm: 0.375rem;
		--vf-slider-tooltip-distance-lg: 0.5rem;
		--vf-slider-tooltip-arrow-size: 0.3125rem;
		--vf-slider-tooltip-arrow-size-sm: 0.3125rem;
		--vf-slider-tooltip-arrow-size-lg: 0.3125rem;
		--vf-size: lg;
	}
</style>
