import path from 'path';

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
    source: {
        entry: {
            index: path.join(__dirname, 'src/index.tsx'),
        },
    },
    plugins: [pluginReact(), pluginSass()],
});
