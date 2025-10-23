<script lang="ts">
	import { list } from './list';
</script>

<div class="flex h-40 w-screen items-center justify-between bg-background px-24">
	{#each list as item}
		<img src={`https://skillicons.dev/icons?i=${item}`} alt={item} />
	{/each}
</div>
