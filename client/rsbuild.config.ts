import path from 'path';

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

import { pluginSimpleStyled } from '../packages/simple-styled/src/rsbuild-plugin';

export default defineConfig({
    source: {
        entry: {
            index: path.join(__dirname, 'src/index.tsx'),
        },
    },
    plugins: [
        pluginReact({
            swcReactOptions: {
                importSource: '@emotion/react',
            },
        }),
        pluginSass(),
        pluginSvgr(),
        pluginSimpleStyled(),
    ],
    // tools: {
    //     rspack: {
    //         plugins: [TanStackRouterRspack({
    //             quoteStyle: 'single',
    //             semicolons: true,
    //             routesDirectory: path.join(__dirname, 'src/routes'),
    //             generatedRouteTree: path.join(__dirname, 'src/routeTree.gen.ts'),
    //         })],
    //     },
    // },
    // tools: {
    //     swc: {
    //         jsc: {
    //             experimental: {
    //                 plugins: [['@swc/plugin-emotion', {}]],
    //             },
    //         },
    //     },
    // },
});
