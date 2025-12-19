export interface Certificate {
	title: string;
	description: string;
	image: string;
	icons: string[];
}

export const certificates: Certificate[] = [
	{
		title: 'Pixel8 Certificate of Training',
		description:
			'I completed a 350‑hour training program on November 3, 2023, mastering Git/GitLab workflow, Vue.js fundamentals, and the Quasar framework—including API integration with Axios—and applying these skills in a comprehensive UI project backed by a JSON server. Throughout the course, I consistently demonstrated strong conceptual grasp, active engagement, and effective collaboration within a GitLab‑driven team environment.',
		image: 'images/certificates/pixel8-certificate-of-training.jpg',
		icons: ['vue', 'git', 'gitlab']
	},
	{
		title: 'Pixel8 Competency Certificate',
		description:
			'I fulfilled all competency requirements of the Pixel8 Academy Frontend Development Training, demonstrating expertise in a modern stack that includes Git (with VS Code, GitLab, Node.js, and Figma), core software‑development practices, and version‑control workflows such as branching and merging. I mastered Vue.js—reactive data binding, component architecture, and routing—and applied the Quasar framework for responsive design, layouts, and component libraries, while also utilizing Vue Router and JSON Server for API prototyping.',
		image: 'images/certificates/pixel8-competency-certificate.jpg',
		icons: ['vscode', 'gitlab', 'nodejs', 'figma']
	}
];
