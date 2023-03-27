/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			dropShadow: {
				'glassmorphism': '0 10px 20px rgba(0, 0, 0, 0.05)',
			},
			colors: {
				glassmorphishm: {
					8: 'rgba(32, 32, 32, 0.08)',
					38: 'rgba(32, 32, 32, 0.38)',
				},
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
