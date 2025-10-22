<script lang="ts">
	import CTAButton from '../Button/CTA.svelte';
	import FloatingHeader from './FloatingHeader.svelte';
</script>

<div class="flex items-center justify-between py-16">
	<div class="flex w-1/2 flex-col gap-11 pr-8">
		<div class="flex flex-col gap-6">
			<h1 class="text-h1 font-semibold text-text">
				Building{' '}
				<span class="text-foreground">High-Performance Websites</span>{' '}
				for Seamless Digital Experiences
			</h1>
			<h6 class="text-h6 text-text">
				I build fast, responsive, and user-focused websites that transform complex challenges into
				seamless, high-performing digital experiences.
			</h6>
		</div>
		<CTAButton value="Contact Me" />
	</div>
	<div class="flex w-1/2 justify-center">
		<FloatingHeader value="Device Responsiveness" style="top-40 -left-40" />
		<FloatingHeader value="Web Development" style="top-15 -left-20" />
		<div class="h-152 w-152 pt-16">
			<img class="w-full" src="/images/hero.png" alt="Hero" loading="lazy" decoding="async" />
		</div>
		<FloatingHeader value="Frontend Development" style="top-15 -left-40" />
		<FloatingHeader value="API Integration" style="top-40 -left-20" />
	</div>
</div>
