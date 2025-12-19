<script lang="ts">
	import NavbarButton from './Button/Navbar.svelte';
</script>

<div
	class="sticky top-0 z-50 flex h-20 w-screen items-center justify-between bg-background-dim px-24 py-5"
>
	<div class="flex h-max w-auto items-center justify-start gap-x-1 text-foreground">
		<img
			src="/images/logo-transparent.png"
			alt="logo"
			class="w-12"
			loading="lazy"
			decoding="async"
		/>
		<h4 class="font-md font-jetbrains-mono text-h4 font-semibold">rockyroed</h4>
	</div>
	<div class="flex w-auto items-center justify-end gap-x-4">
		<NavbarButton value="About" sectionId="about" />
		<NavbarButton value="Stats" sectionId="stats" />
		<NavbarButton value="Services" sectionId="services" />
		<NavbarButton value="Projects" sectionId="projects" />
		<NavbarButton value="Certificates" sectionId="certificates" />
		<NavbarButton value="Contact" sectionId="contact" />
	</div>
</div>
