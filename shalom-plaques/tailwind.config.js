/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#92400e',

					secondary: '#fef3c7',

					accent: '#CAFC03',

					neutral: '#f3f4f6',

					'base-100': '#fff',

					info: '#3194F6',

					success: '#5EC992',

					warning: '#F7E02B',

					error: '#E60400',
				},
			},
		],
	},
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				parallax: "url('/images/preview/wood2.jpg')",
			},
			spacing: {
				'15%': '12%',
				head: '5rem',
				car: '4.5%',
				'1/2': '50%',
				'1/10': '10%',
				'1/2w': '50vw',
				'2/5h': '40vh',
				'3/5h': '60vh',
			},
			colors: {
				toph: 'rgb(0,0,0,0.3)',
				topb: 'rgb(0,0,0,0.9)',
			},
			aspectRatio: {
				logo: '4236/957',
			},
		},
	},
	plugins: [require('daisyui')],
};
