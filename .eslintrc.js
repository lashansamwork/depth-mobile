module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  plugins: ['import', 'unused-imports'],
  extends: [
    '@react-native-community',
    'prettier',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    // prettier
    'prettier/prettier': [2],
    // unused-imports
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': [
      1,
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    // import
    'import/no-unresolved': [1, { commonjs: true, amd: true }],
    'import/extensions': [1],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'ignore',
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    // react-native
    'react-native/no-inline-styles': 0,
    // react
    'react-hooks/exhaustive-deps': 0,
    'no-shadow': 1,
  },
  settings: {
    // import
    'import/ignore': ['react-native'],
    'import/resolver': {
      'babel-module': {
        alias: {
          app: './app',
          '@/screens': './app/screens',
          '@/constants': './app/constants',
          '@/client': './app/client',
          '@/components': './app/components',
        },
      },
    },
  },
};
