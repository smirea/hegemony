import path from 'node:path';
import { fileURLToPath } from 'node:url';

import prettier from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
// eslint-disable-next-line no-redeclare
import jest from 'eslint-plugin-jest';
import _import from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import lodash from 'lodash';

// eslint-disable-next-line no-redeclare
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-redeclare
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            '**/.eslintrc.js',
            '**/build',
            '**/dist',
            '**/generated',
            '**/node_modules',
            'packages/builder-ui/**/*',
        ],
    },
    ...compat.extends(
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ),
    {
        plugins: {
            prettier,
            '@typescript-eslint': typescriptEslint,
            jest,
            import: fixupPluginRules(_import),
            react,
            'react-hooks': fixupPluginRules(reactHooks),
        },

        languageOptions: {
            globals: {
                ...jest.environments.globals.globals,
                ...globals.node,
                ...globals.browser,
                STYLUS: 'readonly',
                _: 'readonly',
            },

            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'commonjs',

            parserOptions: {
                project: './tsconfig-eslint.json',
                tsconfigRootDir: __dirname,
            },
        },

        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },

        rules: {
            'prettier/prettier': 1,
            '@typescript-eslint/ban-ts-comment': 0,

            '@typescript-eslint/consistent-type-imports': [
                1,
                {
                    prefer: 'type-imports',
                    fixStyle: 'inline-type-imports',
                },
            ],

            '@typescript-eslint/default-param-last': 1,
            '@typescript-eslint/explicit-module-boundary-types': 0,
            // "@typescript-eslint/member-delimiter-style": 1,
            '@typescript-eslint/no-confusing-non-null-assertion': 2,
            '@typescript-eslint/no-empty-function': 0,
            '@typescript-eslint/no-empty-interface': 0,
            '@typescript-eslint/no-explicit-any': 0,
            '@typescript-eslint/no-extra-non-null-assertion': 2,
            '@typescript-eslint/no-floating-promises': 2,
            '@typescript-eslint/no-for-in-array': 2,
            '@typescript-eslint/no-implied-eval': 2,
            '@typescript-eslint/no-inferrable-types': 1,
            '@typescript-eslint/no-invalid-this': 2,
            '@typescript-eslint/no-misused-new': 2,

            '@typescript-eslint/no-misused-promises': [
                2,
                {
                    checksVoidReturn: {
                        arguments: false,
                        attributes: false,
                        properties: false,
                    },
                },
            ],

            '@typescript-eslint/no-namespace': 0,
            '@typescript-eslint/no-non-null-assertion': 0,
            '@typescript-eslint/no-this-alias': 2,
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 1,

            '@typescript-eslint/no-unused-vars': [
                2,
                {
                    ignoreRestSiblings: true,
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],

            '@typescript-eslint/no-var-requires': 0,
            '@typescript-eslint/switch-exhaustiveness-check': 2,
            // "@typescript-eslint/type-annotation-spacing": 1,
            '@typescript-eslint/unified-signatures': 1,
            'array-bracket-spacing': 1,
            'arrow-spacing': 1,
            'block-spacing': 1,
            'comma-dangle': [1, 'always-multiline'],
            'comma-spacing': 1,
            'comma-style': 1,
            'computed-property-spacing': 1,
            'func-call-spacing': 1,
            'key-spacing': 1,
            'keyword-spacing': 1,
            // 'no-console': 2,
            'no-multi-spaces': 1,
            'no-trailing-spaces': 1,
            'no-unsafe-optional-chaining': 2,
            'no-unused-vars': 0,
            'no-whitespace-before-property': 1,
            'object-curly-spacing': [1, 'always'],

            'prefer-const': [
                1,
                {
                    destructuring: 'all',
                },
            ],

            'prefer-object-spread': 1,

            quotes: [
                1,
                'single',
                {
                    avoidEscape: true,
                },
            ],

            'rest-spread-spacing': 1,
            'semi-spacing': 1,
            semi: 0,
            'space-infix-ops': 1,
            'spaced-comment': 1,
            'template-curly-spacing': 1,
            'template-tag-spacing': 2,
            'yield-star-spacing': 1,
            'jsx-quotes': [1, 'prefer-single'],

            'no-restricted-imports': [
                2,
                {
                    patterns: [
                        {
                            group: ['lodash'],
                            importNames: Object.keys(lodash),
                            message: 'Use "import _ from \'lodash\'" instead',
                        },
                    ],
                },
            ],

            'import/newline-after-import': [
                1,
                {
                    count: 1,
                },
            ],

            'import/no-duplicates': 1,
            'import/no-unresolved': 0,

            'import/order': [
                1,
                {
                    'newlines-between': 'always',

                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        ['index', 'sibling', 'parent'],
                        'object',
                        'type',
                    ],
                },
            ],

            'react/jsx-curly-brace-presence': 1,
            'react-hooks/rules-of-hooks': 2,
            'react-hooks/exhaustive-deps': 2,
        },
    },
];
