<script lang="ts">
	import Links from '../Footer/Links.svelte';
	import { links } from '../Footer/links';

	const { visible = true }: { visible?: boolean } = $props();
</script>

<div
	class="fixed top-1/2 right-2 z-50 flex -translate-y-1/2 flex-col items-center justify-between gap-4 rounded-xl bg-background-100 p-4 transition-transform duration-300 ease-in-out"
	class:translate-x-full={!visible}
>
	<Links {links} floating={true} />
</div>
