<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { list } from './list';
</script>

<div id="projects" class="flex w-screen flex-col gap-37 px-24 py-20">
	{#each list as project, index}
		<ProjectCard {project} {index} />
	{/each}
</div>
