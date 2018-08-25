module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['jest'],
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:jest/recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/standard',
  ],
  rules: {
    'no-var': 1,
    'prefer-const': 1,
    'no-console': 1,
    'vue/require-v-for-key': 0,
    'vue/max-attributes-per-line': [2, { singleline: 2 }],
  },
}
