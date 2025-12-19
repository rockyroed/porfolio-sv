<script lang="ts">
	import { list } from './list';
	import Icon from '../Button/Icon.svelte';
</script>

<div
	id="services"
	class="grid w-screen grid-cols-1 gap-x-4 gap-y-8 bg-background px-4 py-10 sm:grid-cols-2 sm:px-8 sm:py-14 md:gap-x-6 md:gap-y-10 md:px-12 md:py-16 lg:grid-cols-3 lg:gap-y-12 lg:px-16 lg:py-20 xl:px-24"
>
	<h2
		class="col-span-1 flex flex-col justify-center text-center font-jetbrains-mono text-xl font-medium text-foreground sm:col-span-2 sm:text-2xl md:text-3xl lg:col-span-1 lg:text-h2"
	>
		{'<Skills and Services />'}
	</h2>
	{#each list as skill, index (index)}
		<div class="rounded-xl bg-background-dim px-4 py-6 sm:px-5 sm:py-7 md:px-6 md:py-9">
			<h5 class="mb-3 text-base text-primary sm:text-lg md:mb-4 md:text-h5">{skill.title}</h5>
			<p class="mb-2 text-sm text-text sm:text-base">{skill.description}</p>
			<div class="grid grid-cols-4 gap-2 sm:grid-cols-5 sm:gap-3 md:grid-cols-6">
				{#each skill.icons as icon}
					<Icon {icon} />
				{/each}
			</div>
		</div>
	{/each}
</div>
