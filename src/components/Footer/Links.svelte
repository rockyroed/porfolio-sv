<script lang="ts">
	import type { Link } from './links';

	const { links, floating }: { links: Link[]; floating?: boolean } = $props();
	import Icon from '../Button/Icon.svelte';
</script>

<div class="flex {floating ? 'flex-col' : 'flex-row'} items-center justify-end gap-4">
	{#each links as link}
		<a href={link.link} target="_blank">
			<img
				src={link.icon}
				alt={link.icon}
				class="h-12 w-12 cursor-pointer rounded-xl bg-background p-3 transition-all duration-300 ease-in hover:scale-110"
			/>
		</a>
	{/each}
</div>
