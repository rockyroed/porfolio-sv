<script lang="ts">
	const { links }: { links: Link[] } = $props();
	import Icon from '../Stack/Icon.svelte';
</script>

<div class="flex items-center justify-end gap-x-4">
	{#each links as link}
		<a href={link.link} target="_blank">
			<Icon icon={link.icon} />
		</a>
	{/each}
</div>
