<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import Hero from './components/Hero/index.svelte';
	import Stack from './components/Stack/index.svelte';
	import About from './components/About.svelte';
	import Stats from './components/Stats.svelte';
	import SkillsAndServices from './components/SkillsAndServices/index.svelte';
	import Projects from './components/Projects/index.svelte';
	import Certificates from './components/Certificates/index.svelte';
	import CTA from './components/CTA/index.svelte';
	import Footer from './components/Footer/index.svelte';
	import FloatingLinks from './components/FloatingLinks/index.svelte';
	import { onMount } from 'svelte';

	let footerElement: HTMLElement | null = $state(null);
	let isFooterVisible: boolean = $state(false);
	let observer: IntersectionObserver | null = null;

	onMount(() => {
		const timeoutId = setTimeout(() => {
			if (!footerElement || !(footerElement instanceof HTMLElement)) {
				return;
			}

			observer = new IntersectionObserver(
				(entries) => {
					isFooterVisible = entries[0].isIntersecting;
				},
				{
					threshold: 0.5
				}
			);

			observer.observe(footerElement);
		}, 0);

		return () => {
			clearTimeout(timeoutId);
			if (observer) {
				observer.disconnect();
			}
		};
	});
</script>

<main class="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
	<Navbar />
	<Hero />
	<Stack />
	<About />
	<Stats />
	<SkillsAndServices />
	<Projects />
	<Certificates />
	<CTA />
	<div bind:this={footerElement}>
		<Footer />
	</div>
	<FloatingLinks visible={!isFooterVisible} />
</main>
