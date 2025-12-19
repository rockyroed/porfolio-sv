<script lang="ts">
	let { value }: { value: string } = $props();
</script>

<button
	class="w-max cursor-pointer rounded-xl bg-accent px-6 py-3 text-h5 font-semibold text-text transition-all duration-300 ease-in hover:bg-accent-hover"
>
	{value}
</button>
