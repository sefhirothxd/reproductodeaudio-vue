module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'dark-red-secundary': '#662323',
				'red-principal': '#E86060',
				'bg-musica': '#EB5757',
				'grey-title-music': '#555555',
				'grey-subtitle-music': '#828282',
				'color-musica-fondo': '#A70000',
				seguidores: '#662323',
			},
			fontFamily: {
				Quicksand: ['Quicksand', 'sans-serif'],
			},
			width: {
				'28%': '28%',
				'30%': '30%',
				'62%': '62%',
				'70%': '70%',
				'970px': '970px',
				'1280px': '1280px',
				'1330px': '1330px',
			},
			fontSize: {
				'10px': '10px',
				'22px': '22px',
			},
			borderWidth: {
				'5px': '5px',
			},
			zIndex: {
				'-1': '-1',
				'-10': '-10',
			},
			backgroundImage: {
				adelen:
					"url('https://s3-alpha-sig.figma.com/img/744e/9caa/8d701cae3ed2335f9bace69b93ddbc00?Expires=1620000000&Signature=LFxINDOQZQwDbVaQnPbPjLOyQcwaahb6t4hjG2~7SnMjk9O30HUwUY6mpSgTlGQOCUNijDyPoM2AlKsC1wlUuP7emaomzN1mLFYYsyC3wlwlG7SZA3gIY5H4wMn99fj0RZQD-RbOo9YxLAAx4eryJ~K58rnbKuNHo3RmMOIWnPbBY~7Siopj~sXxkTKKdbZtYX7~J2e-S4mpZSQu8DXBna7Ux3fpXR6DkYR2MfzH847w8UGEOpZjmcdSzmNCYZdU2t2jbRT-4HG-9nDspEx9lH-cGNR7Vw4nafg0kvaIVbLoqHMDwfR8LE9OpSfyZQ0VzpMaTAAaCHS2SvYcrwXhAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
