export interface Item {
	imgRounded: boolean
	img: string
	alt: string
	headline: string
	body: string
	tags: Tag[]
}

export interface Tag {
	text: string
	href?: string
	color?: string
	background?: string
	img?: string
}

export const kms: Item = {
	imgRounded: true,
	img: 'favicon.png',
	alt: 'Kevin Michael Schott',
	headline: 'Kevin Michael Schott',
	body: 'Software Developer with more than 8 years of professional experience in web and mobile app development. My work is agile and remote by nature. If you think we can work together, feel free to send me an <a href="mailto:kevin@kms695.de">email</a> and check out my <a href="https://docs.google.com/document/d/15JC_NMOb_GQZ5FgFvD4WKoNmPGMkSJTL_bwCGskuu9I" target="_blank">curriculum vitae</a>.',
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
		imgRounded: false,
		img: 'img/logos/intervisionsportal.svg',
		alt: 'intervisionsportal',
		headline: 'Intervision portal',
		body: "Germany's first intervision portal on which psychologists can exchange information online and hold inter- and supervisions with other psychologists in accordance with the law.",
		tags: [
			{
				text: 'Svelte',
				background: '#ff3e00'
			},
			{
				text: 'Prisma',
				background: '#1c1c1c'
			},
			{
				text: 'TypeScript',
				background: '#2d79c7'
			}
		]
	},
	{
		imgRounded: false,
		img: 'img/logos/psytools.svg',
		alt: 'psytools',
		headline: 'PsyTools',
		body: 'A set of apps for psychologists to create and manage digital patient files safely from any device.',
		tags: [
			{
				text: 'Swift',
				background: '#f05138'
			},
			{
				text: 'Prisma',
				background: '#1c1c1c'
			},
			{
				text: 'Consulting',
				background: '#4d8caf'
			}
		]
	},
	{
		imgRounded: false,
		img: 'img/logos/rain.png',
		alt: 'rain',
		headline: 'Rain Protocol',
		body: 'Rain is the Lego for Web 3 - for people who want to build amazing things, using the principles that brought us Bitcoin, Ethereum and other permissionless networks and tools. Snap pieces together, build something new, progress every day. <a class="underline" href="https://github.com/beehive-innovation/" target="_blank">Find out more</a>.',
		tags: [
			{
				text: 'Web3',
				color: '#000000',
				background: '#fff500'
			},
			{
				text: 'Svelte',

				background: '#ff3e00'
			},
			{
				text: 'Solidity',
				background: '#1c1c1c'
			}
		]
	},
	{
		imgRounded: false,
		img: 'img/logos/evoluon.svg',
		alt: 'evoluon',
		headline: 'Evoluon',
		body: 'The most iconic location <a class="underline" href="https://evoluon.com/" target="_blank">Evoluon</a> is a unique building due to its very futuristic design, it mostly puts people in mind of a UFO having landed in Eindhoven. Today, Evoluon is a place for events and congresses.',
		tags: [
			{
				text: 'Alpine',
				color: '#000000',
				background: '#77c1d2'
			},
			{
				text: 'KirbyCMS',
				background: '#1c1c1c'
			},
			{
				text: 'Tailwind',
				color: '#000000',
				background: '#38BDF8'
			}
		]
	},
	{
		imgRounded: false,
		img: 'img/logos/nextnature.png',
		alt: 'nextnature',
		headline: 'Next Nature',
		body: 'The <a class="underline" href="https://www.nextnature.net/" target="_blank">Next Nature Network</a> is a nature organization that wants to go forward to nature. They create events, exhibitions, publications and products that bring biology and technology into balance.',
		tags: [
			{
				text: 'Alpine',
				color: '#000000',
				background: '#77c1d2'
			},
			{
				text: 'Laravel',
				background: '#ff2d20'
			},
			{
				text: 'Tailwind',
				color: '#000000',
				background: '#38BDF8'
			}
		]
	},
	{
		imgRounded: false,
		img: 'img/logos/tvcharts.svg',
		alt: 'tvcharts',
		headline: 'tvcharts',
		body: 'Episode ratings for entire series <a class="underline" href="https://tvcharts.co/" target="_blank">in a simple web app</a>, that allows users to search and display results as charts of episode ratings over the entire run of a TV series from IMDb.',
		tags: [
			{
				text: 'Next.js',
				background: '#1c1c1c'
			},
			{
				text: 'AWS',
				background: '#ec7211'
			},
			{
				text: 'Consulting',
				background: '#4d8caf'
			}
		]
	},
	{
		imgRounded: true,
		img: 'img/logos/carsten.png',
		alt: 'rain',
		headline: 'Carsten Greif',
		body: 'After working together for several years, Carsten is the best and most visionary Designer I know. If you are loooking for UX Design and building an amazing brand: He is your best match. You can find out more about him <a class="underline" href="https://www.carstengreif.de/" target="_blank">here</a>.',
		tags: [
			{
				text: 'design',
				color: '#000000',
				background: '#ffffff'
			},
			{
				text: 'UX',
				background: '#8d74da'
			},
			{
				text: 'Branding',
				background: '#1b1b25'
			}
		]
	},
	{
		imgRounded: true,
		img: 'img/logos/vonti.png',
		alt: 'vonti',
		headline: 'vonti',
		body: 'Build your smart home with custom NFC tags, that can be configured via a mobile app like you want to them to. Trigger an action on each scan, get clever analytics and share it with your friends.',
		tags: [
			{
				text: 'Swift',
				background: '#f05138'
			},
			{
				text: 'Firebase',
				color: '#000000',
				background: '#ffcc32'
			},
			{
				text: 'Consulting',
				background: '#4d8caf'
			}
		]
	},
	{
		imgRounded: true,
		img: 'img/logos/metab.png',
		alt: 'metab',
		headline: 'metab',
		body: 'Focusing on building modern tools for content creators to help them monetizing their content. The vision is to raise public awareness of the subject of social media as a profession.',
		tags: [
			{
				text: 'Vue',
				background: '#42b883'
			},
			{
				text: 'Firebase',
				color: '#000000',
				background: '#ffcc32'
			},
			{
				text: 'Consulting',
				background: '#4d8caf'
			}
		]
	},
	{
		imgRounded: true,
		img: 'img/logos/myylink.png',
		alt: 'myylink',
		headline: 'myylink',
		body: 'A mobile app to create a modern linkpage in the fastest way possible. The heart of this app is to provide meaningful analytics for the creators.',
		tags: [
			{
				text: 'Vue',
				background: '#42b883'
			},
			{
				text: 'Firebase',
				color: '#000000',
				background: '#ffcc32'
			},
			{
				text: 'TypeScript',
				background: '#2d79c7'
			}
		]
	},
	{
		imgRounded: true,
		img: 'img/logos/sellby.png',
		alt: 'sellby',
		headline: 'sellby',
		body: 'When influencers need a way to sell their digital goods, <a class="underline" href="https://sellby.de/" target="_blank">sellby</a> is the best choice. You can easily build a custom page and add your products for selling like a one-stop online shop.',
		tags: [
			{
				text: 'Vue',
				background: '#42b883'
			},
			{
				text: 'Firebase',
				color: '#000000',
				background: '#ffcc32'
			},
			{
				text: 'Python',
				background: '#3472a4'
			}
		]
	}
]
