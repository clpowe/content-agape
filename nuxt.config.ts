// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
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

	modules: [
		'nuxt-swiper',
		'@nuxt/image',
		'@nuxt/content',
		'@nuxtjs/supabase',
		'@vueuse/nuxt',
		'nuxt-svgo',
		'@unocss/nuxt',
		'shadcn-nuxt'
	],
	shadcn: {
		componentDir: './components/ui'
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
