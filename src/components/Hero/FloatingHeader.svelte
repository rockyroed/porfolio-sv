<script lang="ts">
	let { value, style }: { value: string; style?: string } = $props();
</script>

<div class="relative">
	<p
		class={`absolute w-max rounded-lg bg-text px-7.5 py-3 text-base font-semibold text-background-dim ${style}`}
	>
		{value}
	</p>
</div>
