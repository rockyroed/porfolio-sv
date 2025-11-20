export interface List {
	title: string;
	description: string;
	icons: string[];
	link: string;
	isLive: boolean;
	isWorkInProgress: boolean;
	image: string;
}

export const list: List[] = [
	{
		title: 'Lystra',
		description:
			'Lystra is a web app for managing wishlists across multiple platforms (Shopee, Amazon, TikTok Shop). Organize items with links, tags, priorities, and statuses.',
		icons: ['vue', 'nuxtjs', 'ts', 'tailwindcss'],
		link: 'https://github.com/rockyroed/lystra',
		isLive: false,
		isWorkInProgress: true,
		image: '/images/lystra.png'
	},
	{
		title: 'Blog',
		description: 'A sample blog website containing posts, categories, and comments.',
		icons: ['react', 'mongodb', 'tailwindcss'],
		link: 'https://github.com/rockyroed/blog-app',
		isLive: false,
		isWorkInProgress: false,
		image: '/images/blog.png'
	},
];
