<script lang="ts">
	let { image, name }: { image: string; name: string } = $props();
</script>

<div class="w-full shrink-0 sm:w-3/4 md:w-1/2">
	<img class="w-full rounded-xl" src={image} alt={name} />
</div>
