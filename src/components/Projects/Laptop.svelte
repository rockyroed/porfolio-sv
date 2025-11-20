<script lang="ts">
	let { image }: { image: string } = $props();
	import laptop from '/images/laptop.svg';
</script>

<div class="shrink-0">
	<img src={laptop} alt="Laptop" />
	<!-- <img src={image} alt="Project" /> -->
</div>
