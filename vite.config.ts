import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'msg-app',
			filename: 'remoteEntry.js',
			remotes: {
				auth:
					import.meta.env?.VITE_REMOTE_ASSETS_APP_URL ||
					'https://d13brhpf8ykarf.cloudfront.net/assets/remoteEntry.js',
			},
		}),
	],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
	build: { target: 'esnext' },
});
