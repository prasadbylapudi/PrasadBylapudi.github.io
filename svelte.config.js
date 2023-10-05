import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// more: https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			scss: true
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: adapter(),
		alias: {
			$src: './src',
			$components: './src/components',
			$assets: './src/assets',
			$utils: './src/utils',
			$data: './src/_data',
			$lib: './src/lib'
		}
	}
};

export default config;
