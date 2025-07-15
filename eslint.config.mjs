import {defineConfig, globalIgnores} from 'eslint/config';
import {fixupConfigRules, fixupPluginRules} from '@eslint/compat';
import pluginReact from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    'node_modules/**/*',
    'build/**/*',
    '!**/*.config.ts',
    '**/public',
    '**/package-lock.json',
    '**/tailwind.config.ts',
    '**/postcss.config.js',
    '**/*.json',
  ]),
  {
    extends: fixupConfigRules(
      compat.extends(
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/typescript',
      ),
    ),

    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
      react: pluginReact,
    },

    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },

    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      '@typescript-eslint/no-explicit-any': 'error',

      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],

      'prefer-const': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/require-default-props': 'off',

      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],

      'import/no-unresolved': 'error',
    },
  },
]);
