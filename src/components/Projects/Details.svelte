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

<div class="flex w-full flex-col gap-2 text-center sm:gap-3 md:w-auto md:text-left">
	<h3 class="text-xl font-semibold text-primary sm:text-2xl md:text-3xl lg:text-4xl">
		{title} <span class="text-text">{isWorkInProgress ? '🟡' : ''}</span>
	</h3>
	<p class="text-sm font-semibold sm:text-base md:text-lg">{description}</p>
	<div class="flex flex-wrap justify-center gap-2 sm:gap-3 md:justify-start">
		{#each icons as icon}
			<Icon {icon} />
		{/each}
	</div>
	<a
		href={isLive ? liveLink : link}
		target="_blank"
		class="mt-2 flex cursor-pointer justify-center sm:mt-4 md:justify-start"
	>
		<CTAButton value={isLive ? 'View Website' : 'View Repository'} />
	</a>
</div>
