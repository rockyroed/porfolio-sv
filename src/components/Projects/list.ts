export interface List {
	title: string;
	description: string;
	icons: string[];
	link: string;
	isLive: boolean;
	liveLink?: string;
	isWorkInProgress: boolean;
	image: string;
}

export const list: List[] = [
	{
		title: 'Blog',
		description: 'A sample blog website containing posts, categories, and comments.',
		icons: ['react', 'mongodb', 'tailwindcss'],
		link: 'https://github.com/rockyroed/blog-app',
		isLive: false,
		isWorkInProgress: false,
		image: '/images/blog.png'
	},
	{
		title: 'Portfolio',
		description: 'A portfolio website showcasing my projects and skills.',
		icons: ['svelte', 'tailwindcss', 'ts'],
		link: 'https://github.com/rockyroed/portfolio-sv',
		isLive: true,
		liveLink: 'https://christianroed.site/',
		isWorkInProgress: false,
		image: '/images/portfolio.png'
	},
	{
		title: 'Exchange Rate Notifier',
		description: 'A python script that emails me about the daily exchange rate of USD to PHP.',
		icons: ['python', 'gmail'],
		link: 'https://github.com/rockyroed/exchange-rate-notifier',
		isLive: false,
		isWorkInProgress: false,
		image: '/images/exchange-rate-notifier.png'
	},
	{
		title: 'Lystra',
		description:
			'Lystra is a web app for managing wishlists across multiple platforms (Shopee, Amazon, TikTok Shop). Organize items with links, tags, priorities, and statuses.',
		icons: ['vue', 'nuxtjs', 'ts', 'tailwindcss'],
		link: 'https://github.com/rockyroed/lystra',
		isLive: false,
		isWorkInProgress: true,
		image: '/images/lystra.png'
	}
];
