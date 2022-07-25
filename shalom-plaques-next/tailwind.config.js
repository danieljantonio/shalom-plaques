/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				'15%': '12%',
				head: '5rem',
				car: '4.5%',
				'1/2': '50%',
				'1/10': '10%',
			},
			colors: {
				toph: 'rgba(0,0,0,0.8)',
				topb: 'rgba(0,0,0,1)',
			},
			aspectRatio: {
				logo: '4236/957',
			},
		},
	},
	plugins: [],
};
