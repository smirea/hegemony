import { env } from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const clientDir = path.dirname(fileURLToPath(import.meta.url));
const clientPort = env.CLIENT_PORT ? Number(env.CLIENT_PORT) : 5173;
if (Number.isNaN(clientPort)) throw new Error('CLIENT_PORT must be a valid number');

const allowedHosts = env.CLIENT_HOST ? [env.CLIENT_HOST] : undefined;
const proxy = env.VITE_API_URL
	? {
			'/api': {
				target: env.VITE_API_URL,
				changeOrigin: true,
				secure: false,
				rewrite: (urlPath: string) => urlPath.replace(/^\/api/, ''),
			},
		}
	: undefined;

export default defineConfig({
	resolve: {
		alias: {
			client: path.join(clientDir, 'src'),
			packages: path.join(clientDir, '../packages'),
			shared: path.join(clientDir, '../shared'),
		},
	},
	server: {
		allowedHosts,
		port: clientPort,
		strictPort: Boolean(env.CLIENT_PORT),
		proxy,
	},
	build: {
		rolldownOptions: {
			output: {
				codeSplitting: {
					groups: [
						{ name: 'lib-react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/, priority: 2 },
						{ name: 'lib-lodash', test: /node_modules[\\/]lodash[\\/]/, priority: 2 },
						{ name: 'vendor', test: /node_modules[\\/]/, priority: 1 },
					],
				},
			},
		},
	},
	plugins: [react()],
});
