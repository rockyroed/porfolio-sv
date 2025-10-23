<script lang="ts">
	import { list } from './list';
	import Icon from '../Stack/Icon.svelte';
</script>

<div class="grid w-screen grid-cols-3 gap-x-6 gap-y-12 bg-background px-24 py-20">
	<h2
		class="flex flex-col justify-center text-center font-jetbrains-mono text-h2 font-medium text-foreground"
	>
		{'<Skills and Services />'}
	</h2>
	{#each list as skill, index (index)}
		<div class="rounded-xl bg-background-dim px-6 py-9">
			<h5 class="mb-4 text-h5 text-primary">{skill.title}</h5>
			<p class="mb-2 text-base text-text">{skill.description}</p>
			<div class="grid grid-cols-6 gap-3">
				{#each skill.icons as icon}
					<Icon {icon} />
				{/each}
			</div>
		</div>
	{/each}
</div>
