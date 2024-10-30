import type { RsbuildPlugin } from '@rsbuild/core';

export interface PluginSimpleStyledOptions {
    message?: string;
}

export const pluginSimpleStyled = (options: PluginSimpleStyledOptions = {}): RsbuildPlugin => ({
    name: 'plugin-simple-styled',

    setup(api) {
        api.onAfterStartDevServer(() => {
            const msg = options.message || 'hello!';
            console.log(msg);
            api.modifyHTMLTags(({ headTags, bodyTags }) => {
                headTags.push({
                    tag: 'script',
                    attrs: { src: 'https://example.com/foo.js' },
                });
                bodyTags.push({
                    tag: 'script',
                    children: 'console.log("hello world!");',
                });

                return { headTags, bodyTags };
            });
        });
    },
});
