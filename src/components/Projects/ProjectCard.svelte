<script lang="ts">
	import type { List } from './list';
	let { project, index }: { project: List; index: number } = $props();

	import Details from './Details.svelte';
	import Laptop from './Laptop.svelte';
</script>

<div
	class="flex w-full flex-col items-center justify-between gap-6 sm:gap-8 md:flex-row md:gap-4"
	class:md:flex-row-reverse={index % 2 === 1}
>
	<Laptop image={project.image} name={project.title} />
	<Details
		title={project.title}
		description={project.description}
		icons={project.icons}
		link={project.link}
		isLive={project.isLive}
		liveLink={project.liveLink}
		isWorkInProgress={project.isWorkInProgress}
	/>
</div>
