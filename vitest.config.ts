import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	resolve: {
		alias: {
			client: path.join(rootDir, 'client/src'),
			packages: path.join(rootDir, 'packages'),
			server: path.join(rootDir, 'server/src'),
			shared: path.join(rootDir, 'shared'),
		},
	},
});
