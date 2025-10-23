<script lang="ts">
	import { list } from './list';
	import Icon from './Icon.svelte';
</script>

<div class="flex w-screen items-center justify-between bg-background px-24 py-8">
	{#each list as item}
		<Icon icon={item} />
	{/each}
</div>
