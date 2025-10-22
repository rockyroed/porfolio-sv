<script lang="ts">
	let { value }: { value: string } = $props();
</script>

<button class="w-max cursor-pointer rounded-xl bg-accent px-8 py-4 text-h5 font-semibold text-text">
	{value}
</button>
