// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'
import { presetFluid } from 'unocss-preset-fluid'

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetFluid({
			// options
		})
	]
})
