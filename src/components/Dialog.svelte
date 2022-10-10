<!--
<script lang="ts">
	export let open = false

	export function show() {
		open = true
	}

	$: {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}
</script>

<section
	class={`overflow-y-auto fancy-scrollbar bg-black z-1 fixed left-0 top-0 w-full h-full ${
		!open && 'invisible'
	}`}
>
	<div class="dialog w-full h-full m-auto p-md">
		<div
			class="pb-md cursor-pointer flex flex-row flex-nowrap w-full"
			on:click={() => (open = false)}
		>
			<div class="flex-grow" />
			<h1>❎</h1>
		</div>
		<slot />
	</div>
</section>
