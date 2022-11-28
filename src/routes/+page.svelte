<script lang="ts">
	import { ALL_TECHNOLOGIES, kms, projects } from '@/lib/projects'
	import CardItem from '@/components/CardItem.svelte'
</script>

<section class="flex flex-col items-center justify-center">
	<CardItem item={kms} showBody h1 />
	<h2 class="mt-xl <lg:mb-md mb-lg text-center">Technologies I love 🛠️</h2>
	<section class="<md:mt-4 grid <md:grid-cols-3 grid-cols-4 gap-4">
		{#each ALL_TECHNOLOGIES as tech}
			<div
				class="glowing-hover rounded-md px-sm py-xs flex flex-row items-center justify-center"
				style={`color: ${tech.color ?? '#ffffff'} !important; background-color: ${tech.background}`}
			>
				{tech.text}
			</div>
		{/each}
	</section>
	<h2 class="mt-xl <lg:mb-md mb-lg text-center">Projects I worked on 🎮</h2>
	<section class="<md:mt-4 grid <lg:grid-cols-1 <xl:grid-cols-2 grid-cols-3 gap-4">
		{#each projects as project}
			<CardItem item={project} />
		{/each}
	</section>
</section>
