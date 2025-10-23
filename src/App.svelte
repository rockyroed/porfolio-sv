<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import Hero from './components/Hero/index.svelte';
	import Stack from './components/Stack.svelte';
	import About from './components/About.svelte';
	import Stats from './components/Stats.svelte';
	import SkillsAndServices from './components/SkillsAndServices/index.svelte';
</script>

<main class="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
	<Navbar />
	<Hero />
	<Stack />
	<About />
	<Stats />
	<SkillsAndServices />
</main>
