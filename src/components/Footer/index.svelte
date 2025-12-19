<script lang="ts">
	import Links from './Links.svelte';
	import { links } from './links';
</script>

<div class="flex w-screen items-center justify-between bg-background-dim px-24 py-10">
	<p class="text-base text-white">© 2025 rockyroed. All rights reserved.</p>
	<Links {links} />
</div>
