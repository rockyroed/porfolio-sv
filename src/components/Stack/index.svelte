<script lang="ts">
	import { list } from './list';
	import Icon from '../Button/Icon.svelte';
</script>

<div
	class="flex w-screen flex-wrap items-center justify-center gap-4 bg-background px-4 py-4 sm:justify-between sm:gap-6 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-16 xl:px-24"
>
	{#each list as item}
		<Icon icon={item} />
	{/each}
</div>
