module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 13
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier', "@vue/eslint-config-prettier"],
  rules: {
    'prettier/prettier': 'error',
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['warn', { allow: ['error'] }]
        : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'global-require': 'off',
    radix: 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'no-empty': ['error', { allowEmptyCatch: false }],
    // indent: ['error', 2, { SwitchCase: 1 }],
    'import/no-extraneous-dependencies': 'off', // because use 'vue'/'vuex' imports
    'no-shadow': 'off', // https://eslint.org/docs/rules/no-shadow
    'comma-dangle': ['error', {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "never",
      "functions": "never"
    }], // ['always', 'always-multiline', 'never']
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-mixed-operators': 'off',
    'no-bitwise': ['error', { allow: ['~'], int32Hint: true }],
    'no-unused-vars':
      process.env.NODE_ENV === 'production' ? ['error', 'always'] : 'off',
    'no-constant-condition': ['warn', { checkLoops: true }],
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: { after: true },
          for: { after: true },
          while: { after: true },
        },
      },
    ],
    'no-multiple-empty-lines':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-return-assign': 'off',
    'prefer-const': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'promise/param-names': 'off',
    'valid-typeof': ['error', { requireStringLiterals: false }],
  },
};
