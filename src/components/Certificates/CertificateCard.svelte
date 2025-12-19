<script lang="ts">
	import type { Certificate } from './certificates';
	import Image from './Image.svelte';
	import Details from './Details.svelte';
	let { certificate, index }: { certificate: Certificate; index: number } = $props();
</script>

<div class="flex items-center justify-between gap-8" class:flex-row-reverse={index % 2 === 1}>
	<Image image={certificate.image} name={certificate.title} />
	<Details
		title={certificate.title}
		description={certificate.description}
		icons={certificate.icons}
	/>
</div>
