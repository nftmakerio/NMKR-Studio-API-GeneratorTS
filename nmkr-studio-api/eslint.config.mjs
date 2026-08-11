// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    // Every codegen file carries a `/* eslint-disable */` header that openapi-typescript-codegen
    // re-emits on each regeneration, so the directives cannot be removed. Without this, each one
    // reports as an unused directive.
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // Must stay last so formatting rules defer to prettier, mirroring the
  // tslint-config-prettier entry this config replaced.
  eslintConfigPrettier,
);
