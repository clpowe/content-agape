// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetUno,
	presetIcons,
	presetTypography
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
	presets: [
		presetAttributify(),
		presetUno(),
		presetIcons(),
		presetTypography(),
		presetAnimations(),
		presetShadcn()
	],
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]s|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/
			]
		}
	}
})
