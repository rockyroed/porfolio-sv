<script lang="ts">
	import Icon from '../Button/Icon.svelte';
	import CTAButton from '../Button/CTA.svelte';

	let {
		title,
		description,
		icons,
		link,
		isLive,
		liveLink,
		isWorkInProgress
	}: {
		title: string;
		description: string;
		icons: string[];
		link: string;
		isLive: boolean;
		liveLink?: string;
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
	<a href={isLive ? liveLink : link} target="_blank" class="mt-4 cursor-pointer">
		<CTAButton value={isLive ? 'View Website' : 'View Repository'} />
	</a>
</div>
