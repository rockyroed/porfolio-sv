<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { list } from './list';
</script>

<div id="projects" class="flex w-screen flex-col items-center justify-center gap-37 px-24 py-20">
	<h2 class="font-jetbrains-mono text-h2 font-medium text-foreground">
		{'<Projects />'}
	</h2>
	{#each list as project, index}
		<ProjectCard {project} {index} />
	{/each}
</div>
