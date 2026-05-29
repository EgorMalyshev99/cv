import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import importPluginX from 'eslint-plugin-import-x'
import prettierPlugin from 'eslint-plugin-prettier'

export default withNuxt(
  {
    ignores: ['.nuxt', '.output', '.turbo', 'node_modules', 'eslint.config.mjs'],
  },
  importPluginX.flatConfigs.recommended,
  importPluginX.flatConfigs.typescript,
  eslintConfigPrettier,
  {
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.json', './.nuxt/tsconfig.app.json'],
        },
      },
    },
    rules: {
      'import-x/no-unresolved': 'off',
      'prettier/prettier': 'error',
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
    },
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    files: ['app/components/ui/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
  },
  {
    files: ['eslint.config.mjs'],
    rules: {
      'import-x/no-named-as-default': 'off',
    },
  }
)
