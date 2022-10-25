<script lang="ts">
	import { kms, projects } from '@/lib/projects'
	import CardItem from '@/components/CardItem.svelte'
</script>

<section class="flex flex-col items-center justify-center">
	<CardItem item={kms} showBody />
	<h1 class="mt-xl <lg:mb-sm mb-lg">Projects I worked on 🧑‍💻</h1>
	<section class="<md:mt-4 grid <lg:grid-cols-1 <xl:grid-cols-2 grid-cols-3 gap-4">
		{#each projects as project}
			<CardItem item={project} />
		{/each}
	</section>
</section>
