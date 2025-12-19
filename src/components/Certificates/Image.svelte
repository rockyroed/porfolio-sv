<script lang="ts">
	let { image, name }: { image: string; name: string } = $props();
</script>

<div class="w-1/2 shrink-0">
	<img src={image} alt={name} />
</div>
