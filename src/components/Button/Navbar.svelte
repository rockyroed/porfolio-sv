<script lang="ts">
	let { value, sectionId }: { value: string; sectionId: string } = $props();
	import { scrollToSection } from '../../lib/scroll-to-section';
</script>

<button
	class="cursor-pointer rounded-full px-4 py-1.5 text-h5 font-semibold text-text hover:bg-background"
	onclick={() => scrollToSection(sectionId)}
>
	{value}
</button>
