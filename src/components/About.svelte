<script lang="ts">
	import CTAButton from './Button/CTA.svelte';
</script>

<div
	id="about"
	class="flex h-auto flex-col gap-8 pt-16 pb-10 sm:pt-20 sm:pb-12 md:flex-row md:gap-x-10 md:pt-28 md:pb-14"
>
	<div class="w-full md:w-1/3">
		<img
			class="mx-auto w-2/3 rounded-xl sm:w-1/2 md:mx-0 md:w-full"
			src="/images/face/about-picture.webp"
			alt="About"
			loading="lazy"
			decoding="async"
		/>
	</div>
	<div class="flex w-full flex-col md:w-2/3">
		<h2
			class="mb-4 font-jetbrains-mono text-xl font-medium text-foreground sm:text-2xl md:mb-6 md:text-3xl lg:text-h2"
		>
			{'<AboutMe />'}
		</h2>
		<h6 class="mb-6 text-sm sm:text-base md:mb-8 md:text-lg lg:text-h6">
			Motivated web developer seeking to apply foundational skills to build responsive and
			user-friendly web applications, while gaining hands-on experience and growing within a dynamic
			team.
		</h6>
		<div
			class="border-border mb-6 grid grid-cols-1 gap-y-4 border-t border-b border-grey-100 px-3 py-5 sm:grid-cols-2 sm:gap-y-5 sm:px-5 sm:py-7 md:mb-10"
		>
			<div class="flex items-center gap-2 sm:gap-3">
				<svg
					class="h-4 w-5 shrink-0 sm:h-[18px] sm:w-6"
					viewBox="0 0 24 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M23.5453 5.94375C23.7281 5.79844 24 5.93437 24 6.16406V15.75C24 16.9922 22.9922 18 21.75 18H2.25C1.00781 18 0 16.9922 0 15.75V6.16875C0 5.93438 0.267187 5.80312 0.454687 5.94844C1.50469 6.76406 2.89688 7.8 7.67813 11.2734C8.66719 11.9953 10.3359 13.5141 12 13.5047C13.6734 13.5188 15.375 11.9672 16.3266 11.2734C21.1078 7.8 22.4953 6.75938 23.5453 5.94375ZM12 12C13.0875 12.0188 14.6531 10.6313 15.4406 10.0594C21.6609 5.54531 22.1344 5.15156 23.5687 4.02656C23.8406 3.81562 24 3.4875 24 3.14062V2.25C24 1.00781 22.9922 0 21.75 0H2.25C1.00781 0 0 1.00781 0 2.25V3.14062C0 3.4875 0.159375 3.81094 0.43125 4.02656C1.86563 5.14687 2.33906 5.54531 8.55938 10.0594C9.34688 10.6313 10.9125 12.0188 12 12Z"
						fill="white"
					/>
				</svg>
				<h6 class="text-xs break-all sm:text-sm md:text-base lg:text-h6">
					christianroedpboyles@protonmail.com
				</h6>
			</div>
			<div class="flex items-center gap-2 sm:gap-3">
				<svg
					class="h-5 w-4 shrink-0 sm:h-6 sm:w-[18px]"
					viewBox="0 0 18 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.07506 23.5158C1.26422 13.6421 0 12.6287 0 9C0 4.02942 4.02942 0 9 0C13.9706 0 18 4.02942 18 9C18 12.6287 16.7358 13.6421 9.92494 23.5158C9.47798 24.1614 8.52197 24.1614 8.07506 23.5158ZM9 12.75C11.0711 12.75 12.75 11.0711 12.75 9C12.75 6.92892 11.0711 5.25 9 5.25C6.92892 5.25 5.25 6.92892 5.25 9C5.25 11.0711 6.92892 12.75 9 12.75Z"
						fill="white"
					/>
				</svg>
				<h6 class="text-xs sm:text-sm md:text-base lg:text-h6">Manila, Philippines</h6>
			</div>
		</div>

		<CTAButton value="Contact Me" href="mailto:christianroedpboyles@protonmail.com" />
	</div>
</div>
