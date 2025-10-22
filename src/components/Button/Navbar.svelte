<script lang="ts">
	let { value }: { value: string } = $props();
</script>

<button
	class="cursor-pointer rounded-full px-4 py-1.5 text-h5 font-semibold text-text hover:bg-background"
>
	{value}
</button>
