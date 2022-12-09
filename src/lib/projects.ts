export interface Item {
	imgRounded: boolean
	img: string
	alt: string
	headline: string
	subheadline?: string
	body: string
	tags: Tag[] | Technology[]
}

export interface Tag {
	text: string
	href?: string
	color?: string
	background?: string
	img?: string
}

export interface Technology {
	text: string
	color?: string
	background?: string
}

export const Web3 = {
	text: 'Web3',
	color: '#000000',
	background: '#fff500'
}

export const Swift = {
	text: 'Swift',
	background: '#f05138'
}

export const Kotlin = {
	text: 'Kotlin',
	background: '#6854DB'
}

export const Java = {
	text: 'Java',
	color: '#000000',
	background: '#f89917'
}

export const Spring = {
	text: 'Spring',
	background: '#6CB52D'
}

export const Flutter = {
	text: 'Flutter',
	color: '#000000',
	background: '#54C5F8'
}

export const Svelte = {
	text: 'Svelte',
	background: '#ff3e00'
}

export const Prisma = {
	text: 'Prisma',
	background: '#000000'
}

export const TypeScript = {
	text: 'TypeScript',
	background: '#2d79c7'
}

export const Consulting = {
	text: 'Consulting',
	background: '#4d8caf'
}

export const Solidity = {
	text: 'Solidity',
	background: '#000000'
}

export const React = {
	text: 'React',
	color: '#000000',
	background: '#38BDF8'
}

export const Alpine = {
	text: 'Alpine',
	color: '#000000',
	background: '#38BDF8'
}

export const KirbyCMS = {
	text: 'KirbyCMS',
	background: '#000000'
}

export const Tailwind = {
	text: 'Tailwind',
	color: '#000000',
	background: '#38BDF8'
}

export const PHP = {
	text: 'PHP',
	background: '#7A86B8'
}

export const Laravel = {
	text: 'Laravel',
	background: '#ff2d20'
}

export const Intertia = {
	text: 'Intertia',
	background: '#6E72ED'
}

export const NextJS = {
	text: 'Next.js',
	background: '#000000'
}

export const AWS = {
	text: 'AWS',
	background: '#ec7211'
}

export const Design = {
	text: 'design',
	color: '#000000',
	background: '#ffffff'
}

export const UX = {
	text: 'UX',
	background: '#8d74da'
}

export const Branding = {
	text: 'Branding',
	background: '#1b1b25'
}

export const Vue = {
	text: 'Vue',
	background: '#42b883'
}

export const Firebase = {
	text: 'Firebase',
	color: '#000000',
	background: '#ffcc32'
}

export const Python = {
	text: 'Python',
	background: '#3472a4'
}

export const kms: Item = {
	imgRounded: true,
	img: 'favicon.jpg',
	alt: 'Kevin Michael Schott',
	headline: 'Kevin Michael Schott',
	subheadline: 'Freelance Software Developer',
	body: `<p class="pb-xs">📱&nbsp; Mobile App Developer</p>
			<p class="pb-xs">🍭&nbsp; Web Developer</p>
			<p class="pb-xs">👨🏼‍💻&nbsp; 8+ years of experience in IT</p>
			<p>🚀&nbsp; <a href="mailto:kevin@kms695.de?subject=Want to work with you&body=Hey Kevin, I found your website and think we can work together. Also added you on LinkedIn, let's talk there.">Hire me</a> and check out my <a href="https://docs.google.com/document/d/15JC_NMOb_GQZ5FgFvD4WKoNmPGMkSJTL_bwCGskuu9I" target="_blank" rel="noreferrer">CV</a></p>`,
	tags: [
		{
			text: 'GitHub',
			href: 'https://github.com/kevinXmichael',
			img: 'img/socials/github.svg'
		},
		{
			text: 'Stackoverflow',
			href: 'https://stackoverflow.com/users/10863535/kevin-michael-schott',
			img: 'img/socials/stackoverflow.svg'
		},
		{
			text: 'Telegram',
			href: 'https://t.me/kms695',
			img: 'img/socials/telegram.svg'
		},
		{
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/kmschott',
			img: 'img/socials/linkedin.svg'
		},
		{
			text: 'XING',
			href: 'https://www.xing.com/profile/KevinMichael_Schott',
			img: 'img/socials/xing.svg'
		}
	]
}

export const projects: Item[] = [
	{
		imgRounded: true,
		img: 'img/logos/swipe.png',
		alt: 'swipe',
		headline: 'SWIPE the movie',
		body: 'With a highly experimental design, the Swipe app presents the evolution of design patterns in mobile apps as an interactive movie.',
		tags: [Swift, Kotlin, Flutter]
	},
	{
		imgRounded: false,
		img: 'img/logos/intervisionsportal.svg',
		alt: 'intervisionsportal',
		headline: 'Intervision portal',
		body: "Germany's first intervision portal on which psychologists can hold inter- and supervisions with other psychologists in accordance with the law.",
		tags: [Svelte, Prisma, TypeScript]
	},
	{
		imgRounded: false,
		img: 'img/logos/psytools.svg',
		alt: 'psytools',
		headline: 'PsyTools',
		body: 'A set of apps for psychologists to create and manage digital patient files safely from any device.',
		tags: [Swift, Prisma, Consulting]
	},
	{
		imgRounded: false,
		img: 'img/logos/rain.png',
		alt: 'rain',
		headline: 'Rain',
		body: 'NFT Designer and NFT Marketplace on a custom web 3 protocol built on top of <a class="underline" href="https://github.com/beehive-innovation/" target="_blank">Ethereum</a>.',
		tags: [Web3, Svelte, Solidity]
	},
	{
		imgRounded: false,
		img: 'img/logos/evoluon.svg',
		alt: 'evoluon',
		headline: 'Evoluon',
		body: 'Labeled as <a class="underline" href="https://evoluon.com/" target="_blank">the most iconic location</a> due to its very futuristic design, it mostly puts people in mind of a UFO having landed in Eindhoven.',
		tags: [Alpine, KirbyCMS, Tailwind]
	},
	{
		imgRounded: false,
		img: 'img/logos/nextnature.png',
		alt: 'nextnature',
		headline: 'Next Nature',
		body: 'The <a class="underline" href="https://www.nextnature.net/" target="_blank">Next Nature Network</a> is an organization that creates events, exhibitions, publications and products that bring biology and technology into balance.',
		tags: [Alpine, Laravel, Tailwind]
	},
	{
		imgRounded: false,
		img: 'img/logos/tvcharts.svg',
		alt: 'tvcharts',
		headline: 'tvcharts',
		body: 'Episode ratings for entire shows <a class="underline" href="https://tvcharts.co/" target="_blank">in a simple web app</a>, that allows users to search and display results from IMDb more clearly.',
		tags: [NextJS, AWS, Consulting]
	},
	{
		imgRounded: true,
		img: 'img/logos/carsten.png',
		alt: 'rain',
		headline: 'Carsten Greif',
		body: 'After working together for several years, <a class="underline" href="https://www.carstengreif.de/" target="_blank">Carsten</a> is the best and most visionary Designer if you are loooking for UX Design and building an amazing brand.',
		tags: [Design, UX, Branding]
	},
	{
		imgRounded: true,
		img: 'img/logos/metab.png',
		alt: 'metab',
		headline: 'metab',
		body: 'A software agency focusing on building modern tools for content creators to help them monetizing their content.',
		tags: [Vue, Firebase, Consulting]
	},
	{
		imgRounded: true,
		img: 'img/logos/myylink.png',
		alt: 'myylink',
		headline: 'myylink',
		body: 'A mobile app to create a modern linkpage in the fastest way possible. The heart of this app is to provide meaningful analytics for the creators.',
		tags: [Vue, Firebase, TypeScript]
	},
	{
		imgRounded: true,
		img: 'img/logos/vonti.png',
		alt: 'vonti',
		headline: 'vonti',
		body: 'Build your smart home with custom NFC tags that can be configured via a mobile app. Trigger an action on each scan, get clever analytics and share it with your friends.',
		tags: [Swift, Firebase, Consulting]
	},
	{
		imgRounded: true,
		img: 'img/logos/sellby.png',
		alt: 'sellby',
		headline: 'sellby',
		body: 'When influencers need a way to sell their digital goods, <a class="underline" href="https://sellby.de/" target="_blank">sellby</a> is the best choice. You can easily build a custom page and add your products for selling like a one-stop online shop.',
		tags: [Vue, Firebase, Python]
	}
]

export const ALL_TECHNOLOGIES: Technology[] = [
	Swift,
	Kotlin,
	Java,
	Spring,
	Flutter,
	Svelte,
	TypeScript,
	Vue,
	PHP,
	Laravel,
	Intertia,
	Tailwind,
	Prisma,
	NextJS,
	Python,
	Alpine,
	Firebase
]
