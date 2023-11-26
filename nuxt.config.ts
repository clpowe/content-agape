// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			viewport: 'width=device-width, initial-scale=1',
			htmlAttrs: {
				lang: 'en'
			}
		}
	},
	content: {
		documentDriven: true
	},
	runtimeConfig: {
		FORMKIT_PRO_KEY: 'fk-4e814a4c22'
	},
	devtools: {
		enabled: true,

		timeline: {
			enabled: true
		}
	},
	modules: [
		'@nuxt/image',
		'@nuxt/content',
		'@formkit/nuxt',
		'@nuxtjs/supabase'
	],
	formkit: {
		defaultConfig: true,
		autoImport: true,
		configFile: './formkit.config.ts'
	},
	theme: 'genesis',
	image: {
		imagekit: {
			baseURL: 'https://ik.imagekit.io/cpds/Agape_Christian/'
		}
	}
})
