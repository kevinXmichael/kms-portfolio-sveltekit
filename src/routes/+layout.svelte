<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import 'virtual:windi-components.css'
	import 'virtual:windi-utilities.css'
	import '@/css/app.scss'

	const copyright = `© ${new Date().getFullYear()} kms695`
	let tabActive = true
	$: isLegalRoute = ($page?.route?.id ?? '').includes('legal')

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

<footer class="my-md w-full flex flex-col items-center justify-center">
	<a href={isLegalRoute ? '/' : '/legal'} class="no-underline">
		<span>{copyright}</span>
		・
		<span class="underline">{isLegalRoute ? 'Home' : 'Imprint / GDPR'}</span>
	</a>
</footer>
