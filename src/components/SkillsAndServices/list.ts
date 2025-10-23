interface List {
	title: string;
	description: string;
	icons?: string[];
}

export const list: List[] = [
	{
		title: 'Frontend Development',
		description: 'Crafting intuitive, accessible, and responsive interfaces.',
		icons: ['react', 'nuxtjs', 'nextjs', 'nuxtjs', 'typescript', 'tailwindcss']
	},
	{
		title: 'Backend & APIs',
		description: 'Building solid foundations and smooth data flow.',
		icons: ['nodejs', 'express', 'nuxtjs', 'nextjs']
	},
	{
		title: 'Database Management',
		description: 'Structuring and managing data securely.',
		icons: ['mongodb', 'supabase', 'firebase']
	},
	{
		title: 'Tools & Workflows',
		description: 'Version control, testing, design, and deployment.',
		icons: ['git', 'github', 'postman', 'docker', 'vitest', 'figma']
	},
	{
		title: 'Development Philosophy',
		description:
			'Clean code. Reusable components. Performance-focused architecture. I build with scalability, maintainability, and user experience in mind.'
	}
];
