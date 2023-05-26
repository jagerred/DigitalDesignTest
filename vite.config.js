import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: {
			components: '/src/components',
			assets: '/src/assets',
			data: '/src/data',
			helpers: '/src/helpers',
			utils: '/src/utils',
		},
	},
});
