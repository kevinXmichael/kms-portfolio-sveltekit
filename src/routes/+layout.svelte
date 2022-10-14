<script lang="ts">
	import { browser } from '$app/environment'
	import 'virtual:windi-components.css'
	import 'virtual:windi-utilities.css'
	import '@/css/app.scss'

	let tabActive = true
	if (browser) {
		document.addEventListener('visibilitychange', () => (tabActive = !document.hidden))
	}
</script>

<svelte:head>
	{#if tabActive}
		<title>Kevin Michael Schott 🧑‍💻</title>
	{:else}
		<title>(1) Why are you running?</title>
	{/if}
</svelte:head>

<main class="flex flex-col items-center p-lg m-auto text-left w-full">
	<slot />
</main>
