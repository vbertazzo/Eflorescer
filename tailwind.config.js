module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#FCD5CE',
				'primary-light': '#F8F2F1',
				secondary: '#7A6A67',
				tertiary: '#E8E8E4'
			}
		}
	},
	variants: {},
	plugins: []
}
