<script lang="ts">
	import type { Item } from '@/lib/projects'

	export let item: Item
	export let showBody = false
	export let h1 = false
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={`${$$props.class ?? ''} card`} on:click={() => (showBody = !showBody)}>
	<section class="p-md flex flex-row flex-nowrap items-center">
		<img
			src={item.img}
			alt={item.alt}
			class={`${item.imgRounded && 'rounded-xl'} max-h-4rem max-w-4rem w-full`}
		/>
		<div>
			{#if h1}
				<h1 class="ml-md">{item.headline}</h1>
			{:else}
				<h2 class="ml-md">{item.headline}</h2>
			{/if}
		</div>
	</section>
	<div
		id="divider"
		class="w-full"
		style="background-color: rgba(255, 255, 255, 0.2); min-height: 1px;"
	/>
	<section class="h-full p-md pt-0 flex flex-col">
		<span class="pt-md">{@html item.body}</span>
		<div class="grow" />
		<div class="flex flex-row flex-nowrap w-full pt-md">
			{#each item.tags as tag}
				<div
					class={tag.img ? 'mr-md' : 'mr-sm rounded-md px-sm py-xs'}
					style={`color: ${tag.color ?? '#ffffff'} !important; background-color: ${tag.background}`}
				>
					{#if tag.href}
						<a href={tag.href} target="_blank" class="no-underline" rel="noreferrer">
							{#if tag.img}
								<img src={tag.img} alt={tag.text} class="w-1.5rem h-1.5rem" />
							{:else}
								{tag.text}
							{/if}
						</a>
					{:else}
						<div class="lowercase">#{tag.text}</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>
</div>
