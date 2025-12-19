<script lang="ts">
	import { certificates } from './certificates';
	import CertificateCard from './CertificateCard.svelte';
</script>

<div class="flex w-screen flex-col items-center justify-center gap-20 bg-background px-24 py-20">
	<h2 class="font-jetbrains-mono text-h2 font-medium text-foreground">
		{'<Certificates />'}
	</h2>
	{#each certificates as certificate, index (index)}
		<CertificateCard {certificate} {index} />
	{/each}
</div>
