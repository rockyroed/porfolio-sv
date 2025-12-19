<script lang="ts">
	import { certificates } from './certificates';
	import CertificateCard from './CertificateCard.svelte';
</script>

<div
	id="certificates"
	class="flex w-screen flex-col items-center justify-center gap-12 bg-background px-4 py-10 sm:gap-16 sm:px-8 sm:py-14 md:gap-20 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-24"
>
	<h2
		class="font-jetbrains-mono text-xl font-medium text-foreground sm:text-2xl md:text-3xl lg:text-h2"
	>
		{'<Certificates />'}
	</h2>
	{#each certificates as certificate, index (index)}
		<CertificateCard {certificate} {index} />
	{/each}
</div>
