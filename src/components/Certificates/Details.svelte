<script lang="ts">
	import Icon from '../Stack/Icon.svelte';
	let {
		title,
		description,
		icons
	}: {
		title: string;
		description: string;
		icons: string[];
	} = $props();
</script>

<div class="flex flex-col gap-3">
	<h3 class="text-4xl font-semibold text-primary">
		{title}
	</h3>
	<p class="text-lg font-semibold">{description}</p>
	<div class="flex flex-wrap gap-3">
		{#each icons as icon}
			<Icon {icon} />
		{/each}
	</div>
</div>
