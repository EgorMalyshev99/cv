// @ts-check
import importX from 'eslint-plugin-import-x'
import eslintConfigPrettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,

  {
    settings: {
      'import-x/resolver': {
        typescript: {
          project: './.nuxt/tsconfig.app.json',
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    rules: {
      'vue/no-unused-components': 'error',
      'vue/no-undef-components': 'warn',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    },
  },

  {
    files: ['app/components/ui/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/block-order': 'off',
    },
  },
  {
    files: ['app/components/sections/**/*.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  {
    files: ['app/pages/**/*.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },

  eslintConfigPrettier,
)
