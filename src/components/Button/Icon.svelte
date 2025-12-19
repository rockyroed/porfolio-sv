<script lang="ts">
	let { icon }: { icon: string } = $props();
</script>

{#if icon.startsWith('https://')}
	<button
		class="h-12 w-12 rounded-xl bg-background p-2 transition-all duration-300 ease-in hover:scale-110"
	>
		<img src={icon} alt={icon} />
	</button>
{:else}
	<button class="h-12 w-12 transition-all duration-300 ease-in hover:scale-110">
		<img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
	</button>
{/if}
