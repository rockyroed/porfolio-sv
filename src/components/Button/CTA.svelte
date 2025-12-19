<script lang="ts">
	let { value }: { value: string } = $props();
</script>

<button
	class="w-max cursor-pointer rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-text transition-all duration-300 ease-in hover:bg-accent-hover sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:text-h5"
>
	{value}
</button>
