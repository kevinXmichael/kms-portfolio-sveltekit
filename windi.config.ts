module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {},
		fontSize: {
			// '3xl': 'var(--3xl)',
			// '2xl': 'var(--2xl)',
			// xl: 'var(--xl)',
			// xs: 'var(--xs)'
		},
		screens: {
			sm: '640px',
			md: '40rem',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		spacing: {
			xs: '0.25rem',
			sm: '0.5rem',
			md: '1.0rem',
			lg: '2.0rem',
			xl: '4.0rem'
		},
		colors: {
			white: 'var(--white)',
			gray: 'var(--gray)',
			black: 'var(--black)',
			primary: 'var(--primary)',
			transparent: 'var(--transparent)'
		}
	}
}
