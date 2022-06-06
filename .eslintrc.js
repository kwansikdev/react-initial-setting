module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': ['off'],
    'react/require-default-props': ['off'],
    'jsx-a11y/control-has-associated-label': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['CustomComponent'],
        ignoreElements: [
          'audio',
          'canvas',
          'embed',
          'input',
          'textarea',
          'tr',
          'video',
        ],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        depth: 3,
      },
    ],
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/tabindex-no-positive': ['off'],
    'jsx-a11y/label-has-associated-control': 'off',
    'func-names': ['error', 'as-needed'],
    'import/extensions': ['off'],
    'import/prefer-default-export': ['warn'],
    'import/no-unresolved': ['off'],
    'import/no-cycle': 'off',
    'consistent-return': ['off'],
    'camelcase': ['off'],
    'no-nested-ternary': ['off'],
    'no-restricted-syntax': ['off'],
    'no-param-reassign': ['off'],
  },
};

// {
//   root: true,
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   env: {
//     browser: true,
//     node: true,
//   },
//   plugins: ['simple-import-sort', 'react-hooks'],
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react/recommended',
//     'plugin:jsx-a11y/recommended',
//     'prettier/@typescript-eslint',
//     'plugin:prettier/recommended', // Make sure this is always the last element in the array.
//   ],
//   rules: {
//     // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
//     // 'react/react-in-jsx-scope': 'off',
//     // 'react/prop-types': 'off',
//     // // '@typescript-eslint/explicit-function-return-type': 'off',
//     // 'simple-import-sort/sort': 'error',
//     // 'jsx-a11y/anchor-is-valid': [
//     //   'error',
//     //   {
//     //     components: ['Link'],
//     //     specialLink: ['hrefLeft', 'hrefRight'],
//     //     aspects: ['invalidHref', 'preferButton'],
//     //   },
//     // ],
//     // 'indent': 'off',
//     // 'curly': 'off',
//     // 'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
//     // 'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
//   },
// };
