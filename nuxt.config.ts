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
		documentDriven: false
	},
	ssr: true,
	modules: [
		'nuxt-swiper',
		'@nuxt/image',
		'@nuxt/content',
		'@nuxtjs/supabase',
		'@vueuse/nuxt',
		'nuxt-svgo',
		'nuxt-primevue',
		'@nuxtjs/tailwindcss'
	],

	svgo: {
		autoImportPath: './assets/icons/'
	},
	supabase: {
		redirect: false
	},

	image: {
		imagekit: {
			baseURL: 'https://ik.imagekit.io/cpds/Agape_Christian/'
		}
	}
})
