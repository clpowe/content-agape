import { defineFormKitConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'
import { createProPlugin, inputs } from '@formkit/pro'

export default defineFormKitConfig(() => {
	// const config = useRuntimeConfig()
	const pro = createProPlugin('fk-4e814a4c22', inputs)
	const multi = createMultiStepPlugin()

	return { plugins: [multi, pro], theme: 'genesis' }
})
