<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { list } from './list';
</script>

<div
	id="projects"
	class="flex w-screen flex-col items-center justify-center gap-16 px-4 py-10 sm:gap-20 sm:px-8 sm:py-14 md:gap-28 md:px-12 md:py-16 lg:gap-37 lg:px-16 lg:py-20 xl:px-24"
>
	<h2
		class="font-jetbrains-mono text-xl font-medium text-foreground sm:text-2xl md:text-3xl lg:text-h2"
	>
		{'<Projects />'}
	</h2>
	{#each list as project, index}
		<ProjectCard {project} {index} />
	{/each}
</div>
