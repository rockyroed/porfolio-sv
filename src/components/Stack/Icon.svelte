<script lang="ts">
	let { icon }: { icon: string } = $props();
</script>

{#if icon.startsWith('https://')}
	<div class="h-12 w-12 rounded-xl bg-background p-2">
		<img src={icon} alt={icon} />
	</div>
{:else}
	<img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
{/if}
