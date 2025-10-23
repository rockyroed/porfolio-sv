<script lang="ts">
	let { value, style }: { value: string; style?: string } = $props();
</script>

<div
	class={`floating-header absolute z-10 w-max rounded-lg bg-text px-2 py-1 text-xs font-semibold text-background-dim shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] sm:px-3 sm:py-1.5 sm:text-sm md:rounded-xl md:px-5 md:py-3 md:text-base lg:rounded-2xl lg:px-6 lg:py-3.5 lg:text-lg ${style}`}
>
	{value}
</div>

<style>
	.floating-header {
		box-shadow:
			0 10px 25px -5px rgba(255, 255, 255, 0.1),
			0 8px 10px -6px rgba(255, 255, 255, 0.1),
			0 0 0 1px rgba(255, 255, 255, 0.05);
		animation: float 6s ease-in-out infinite;
	}

	.floating-header:hover {
		animation-play-state: paused;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}
</style>
