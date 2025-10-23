<script lang="ts">
	import { list } from './list';
</script>

<div class="flex w-screen items-center justify-between bg-background px-24 py-8">
	{#each list as item}
		<img src={`https://skillicons.dev/icons?i=${item}`} alt={item} />
	{/each}
</div>
