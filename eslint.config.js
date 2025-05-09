import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
  },
  {
    ignores: ['coverage', 'public', 'dist', 'pnpm-lock.yaml'],
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
