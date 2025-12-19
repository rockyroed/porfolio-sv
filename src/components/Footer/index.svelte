<script lang="ts">
	import Links from './Links.svelte';
	import { links } from './links';
</script>

<div
	class="flex w-screen flex-col items-center justify-between gap-4 bg-background-dim px-4 py-6 sm:flex-row sm:gap-0 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 xl:px-24"
>
	<p class="text-center text-sm text-white sm:text-left sm:text-base">
		© 2025 rockyroed. All rights reserved.
	</p>
	<Links {links} />
</div>
