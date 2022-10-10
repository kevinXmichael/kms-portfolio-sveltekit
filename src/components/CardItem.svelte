<script lang="ts">
	import type { Item } from '@/lib/projects'
	export let item: Item
	let showBody = false
	$: bodyText = showBody ? item.body : item.body.split(' ').slice(0, 16).join(' ') + '...'
</script>

<div class={`${$$props.class ?? ''} card`} on:click={() => (showBody = !showBody)}>
	<section class="p-md flex flex-row flex-nowrap items-center">
		<img
			src={item.img}
			alt={item.alt}
			class={`${item.imgRounded && 'rounded-full'} max-h-5rem max-w-5rem w-full`}
		/>
		<h1 class="ml-md">{item.headline}</h1>
	</section>
	<div
		id="divider"
		class="w-full"
		style="background-color: rgba(255, 255, 255, 0.2); min-height: 1px;"
	/>
	<section class="h-full p-md pt-0 flex flex-col">
		<span class="pt-md">{@html bodyText}</span>
		<div class="grow" />
		<div class="flex flex-row flex-nowrap w-full pt-md">
			{#each item.tags as tag}
				<div
					class="mr-sm px-sm py-xs rounded-md"
					style={`color: ${tag.color ?? '#ffffff'} !important; background-color: ${tag.background}`}
				>
					{#if tag.href}
						<a href={tag.href} target="_blank" class="no-underline">
							{tag.text}
						</a>
					{:else}
						<div class="lowercase">#{tag.text}</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>
</div>
