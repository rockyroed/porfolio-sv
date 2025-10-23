<script lang="ts">
	let { icon }: { icon: string } = $props();
</script>

<img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
