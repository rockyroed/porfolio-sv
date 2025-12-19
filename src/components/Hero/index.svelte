<script lang="ts">
	import CTAButton from '../Button/CTA.svelte';
	import FloatingHeader from './FloatingHeader.svelte';
</script>

<div class="flex flex-col items-center justify-between gap-8 py-8 md:flex-row md:py-12 lg:py-16">
	<div class="flex flex-col gap-6 md:w-full md:gap-8 md:pr-4 lg:w-1/2 lg:gap-11 lg:pr-8">
		<div class="flex flex-col gap-4 md:gap-5 lg:gap-6">
			<h1 class="text-2xl font-semibold text-text sm:text-3xl md:text-4xl lg:text-h1">
				Building{' '}
				<span class="text-foreground">High-Performance Websites</span>{' '}
				for Seamless Digital Experiences
			</h1>
			<h6 class="text-base text-text sm:text-lg md:text-xl lg:text-h6">
				I build fast, responsive, and user-focused websites that transform complex challenges into
				seamless, high-performing digital experiences.
			</h6>
		</div>
		<CTAButton value="Contact Me" href="mailto:christianroedpboyles@protonmail.com" />
	</div>
	<div class="relative hidden w-full justify-center md:w-1/2 lg:flex">
		<div
			class="3xl:h-152 3xl:w-152 relative h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
		>
			<img
				class="h-full w-full object-contain"
				src="/images/face/hero.webp"
				alt="Hero"
				loading="lazy"
				decoding="async"
			/>
			<FloatingHeader
				value="Web Development"
				style="top-[2%] left-[-8%] sm:top-[5%] sm:left-[-12%] md:left-[-15%]"
			/>
			<FloatingHeader
				value="Responsive"
				style="top-[8%] right-[-10%] sm:right-[-15%] md:right-[-20%] lg:right-[-25%]"
			/>
			<FloatingHeader
				value="Frontend Development"
				style="bottom-[12%] left-[-12%] hidden sm:block md:left-[-20%] lg:left-[-25%]"
			/>
			<FloatingHeader
				value="API Integration"
				style="bottom-[5%] right-[-8%] sm:right-[-12%] md:right-[-15%]"
			/>
		</div>
	</div>
</div>
