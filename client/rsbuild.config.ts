import path from 'path';

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
    source: {
        entry: {
            index: path.join(__dirname, 'src/index.tsx'),
        },
    },
    plugins: [pluginReact(), pluginSass(), pluginSvgr()],
});
