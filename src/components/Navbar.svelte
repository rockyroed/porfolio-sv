<script lang="ts">
	import NavbarButton from './Button/Navbar.svelte';

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<div
	class="sticky top-0 z-50 flex h-16 w-screen items-center justify-between bg-background-dim px-4 py-3 sm:h-20 sm:px-8 md:px-12 lg:px-16 xl:px-24"
>
	<div class="flex h-max w-auto items-center justify-start gap-x-1 text-foreground">
		<img
			src="/images/logo-transparent.png"
			alt="logo"
			class="w-10 sm:w-12"
			loading="lazy"
			decoding="async"
		/>
		<h4 class="font-md font-jetbrains-mono text-lg font-semibold sm:text-xl md:text-h4">
			rockyroed
		</h4>
	</div>

	<!-- Mobile hamburger button -->
	<button
		class="flex cursor-pointer flex-col gap-1.5 p-2 lg:hidden"
		onclick={toggleMenu}
		aria-label="Toggle menu"
	>
		<span
			class="block h-0.5 w-6 bg-text transition-all duration-300"
			class:rotate-45={menuOpen}
			class:translate-y-2={menuOpen}
		></span>
		<span class="block h-0.5 w-6 bg-text transition-all duration-300" class:opacity-0={menuOpen}
		></span>
		<span
			class="block h-0.5 w-6 bg-text transition-all duration-300"
			class:-rotate-45={menuOpen}
			class:-translate-y-2={menuOpen}
		></span>
	</button>

	<!-- Desktop navigation -->
	<div class="hidden w-auto items-center justify-end gap-x-2 lg:flex xl:gap-x-4">
		<NavbarButton value="About" sectionId="about" />
		<NavbarButton value="Stats" sectionId="stats" />
		<NavbarButton value="Services" sectionId="services" />
		<NavbarButton value="Projects" sectionId="projects" />
		<NavbarButton value="Certificates" sectionId="certificates" />
		<NavbarButton value="Contact" sectionId="contact" />
	</div>
</div>

<!-- Mobile navigation menu -->
{#if menuOpen}
	<div
		class="fixed inset-0 top-16 z-40 bg-background-dim/95 backdrop-blur-sm sm:top-20 lg:hidden"
		role="button"
		tabindex="0"
		onclick={closeMenu}
		onkeydown={(e) => e.key === 'Escape' && closeMenu()}
	>
		<div class="flex flex-col items-center gap-4 px-4 py-8">
			<NavbarButton value="About" sectionId="about" />
			<NavbarButton value="Stats" sectionId="stats" />
			<NavbarButton value="Services" sectionId="services" />
			<NavbarButton value="Projects" sectionId="projects" />
			<NavbarButton value="Certificates" sectionId="certificates" />
			<NavbarButton value="Contact" sectionId="contact" />
		</div>
	</div>
{/if}
