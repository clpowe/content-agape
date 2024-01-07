import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				agape: {
					'50': '#ff7961',
					'100': '#ff644d',
					'200': '#ff4b33',
					'300': '#ff1e05',
					'400': '#cc1100',
					'500': '#940a00',
					'600': '#740701',
					'700': '#470300',
					'800': '#230201',
					'900': '#0e0101',
					'950': '#000000'
				}
			}
		}
	}
}
