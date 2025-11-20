<script lang="ts">
	import Icon from '../Stack/Icon.svelte';
	let {
		title,
		description,
		icons,
		link,
		isLive,
		isWorkInProgress
	}: {
		title: string;
		description: string;
		icons: string[];
		link: string;
		isLive: boolean;
		isWorkInProgress: boolean;
	} = $props();
</script>

<div class="flex flex-col gap-3">
	<h3 class="text-4xl font-semibold text-primary">
		{title} <span class="text-text">{isWorkInProgress ? '🟡' : ''}</span>
	</h3>
	<p class="text-lg font-semibold">{description}</p>
	<div class="flex flex-wrap gap-3">
		{#each icons as icon}
			<Icon {icon} />
		{/each}
	</div>
	<a href={link} target="_blank" class="cursor-pointer mt-4">
		<button class="cursor-pointer rounded-md bg-primary px-4 py-2 text-text">
			{isLive ? 'View Website' : 'View Repository'}
		</button>
	</a>
</div>
