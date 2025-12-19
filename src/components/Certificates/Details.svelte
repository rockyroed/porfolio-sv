<script lang="ts">
	import Icon from '../Button/Icon.svelte';
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

<div class="flex w-full flex-col gap-2 text-center sm:gap-3 md:w-auto md:text-left">
	<h3 class="text-xl font-semibold text-primary sm:text-2xl md:text-3xl lg:text-4xl">
		{title}
	</h3>
	<p class="text-sm font-semibold sm:text-base md:text-lg">{description}</p>
	<div class="flex flex-wrap justify-center gap-2 sm:gap-3 md:justify-start">
		{#each icons as icon}
			<Icon {icon} />
		{/each}
	</div>
</div>
