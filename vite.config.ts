import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		sveltekit(),
		WindiCSS({
			scan: {
				dirs: ['./src'],
				fileExtensions: ['svelte', 'js', 'ts', 'html']
			}
		})
	],
	resolve: {
		alias: {
			'@': path.resolve('./src')
		}
	}
})
