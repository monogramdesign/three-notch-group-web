interface NavLink {
	label: string
	href?: string
	dropdown?: {
		label: string
		href: string
	}[]
}

export const navigation: NavLink[] = [
	{
		label: 'About',
		dropdown: [
			{ label: 'Our Story', href: '/about/story' },
			{ label: 'Team', href: '/about/team' },
			{ label: 'Values', href: '/about/values' }
		]
	},
	{
		label: 'Sectors',
		dropdown: [
			{ label: 'Defense', href: '/sectors/defense' },
			{ label: 'Energy', href: '/sectors/energy' },
			{ label: 'Technology', href: '/sectors/technology' }
		]
	},
	{
		label: 'Services',
		dropdown: [
			{ label: 'Consulting', href: '/services/consulting' },
			{ label: 'Engineering', href: '/services/engineering' },
			{ label: 'Operations', href: '/services/operations' }
		]
	},
	{
		label: 'Latest',
		href: '/latest'
	},
	{
		label: 'Careers',
		href: '/careers'
	},
	{
		label: 'Contact',
		href: '/contact'
	}
]
