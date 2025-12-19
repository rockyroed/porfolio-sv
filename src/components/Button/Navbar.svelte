<script lang="ts">
	let { value, sectionId }: { value: string; sectionId: string } = $props();
	import { scrollToSection } from '../../lib/scroll-to-section';
</script>

<button
	class="cursor-pointer rounded-full px-3 py-1.5 text-base font-semibold text-text transition-all duration-300 ease-in hover:bg-background lg:px-4 lg:text-lg xl:text-h5"
	onclick={() => scrollToSection(sectionId)}
>
	{value}
</button>
