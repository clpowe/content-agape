// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true
	},
	hooks: {
		ready: () => {
			console.log('ready')
		}
	},
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

	modules: [
		'nuxt-swiper',
		'@nuxt/image',
		'@nuxt/content',
		'@formkit/nuxt',
		'@unocss/nuxt',
		'@nuxtjs/supabase',
		'@vueuse/nuxt'
	],

	formkit: {
		autoImport: true,
		defaultConfig: true,
		configFile: './formkit.config.ts'
	},

	supabase: {
		redirect: false
	},
	unocss: {
		attributify: true,
		icons: true
	},
	image: {
		imagekit: {
			baseURL: 'https://ik.imagekit.io/cpds/Agape_Christian/'
		}
	}
})
