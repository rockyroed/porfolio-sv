<script lang="ts">
	let { image, name }: { image: string; name: string } = $props();
</script>

<div class="w-1/2 shrink-0">
	<img class="rounded-xl" src={image} alt={name} />
</div>
