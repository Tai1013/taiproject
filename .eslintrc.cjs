/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  /*
    "off" -> 0 關閉規則
    "warn" -> 1 開啟警告規則
    "error" -> 2 開啟錯誤規則
  */
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/require-explicit-emits': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'eol-last': 2,
    'no-console': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-multi-spaces': 2,
    'no-func-assign': 2,
    'no-trailing-spaces': 2,
    'no-redeclare': [2, { 'builtinGlobals': true }],
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [2, 'always']
  }
})
