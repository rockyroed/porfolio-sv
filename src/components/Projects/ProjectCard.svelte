<script lang="ts">
	import type { List } from './list';
	let { project, index }: { project: List; index: number } = $props();

	import Details from './Details.svelte';
	import Laptop from './Laptop.svelte';
</script>

<div class="flex items-start justify-between gap-4" class:flex-row-reverse={index % 2 === 1}>
	<Laptop image={project.image} />
	<Details
		title={project.title}
		description={project.description}
		icons={project.icons}
		link={project.link}
		isLive={project.isLive}
		isWorkInProgress={project.isWorkInProgress}
	/>
</div>
