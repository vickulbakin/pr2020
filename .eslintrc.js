module.exports = {
  extends: ['plugin:react/recommended', 'prettier'],
  plugins: ['prettier', 'react', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-debugger': ['error'],
    'no-restricted-globals': [2, 'localStorage', 'sessionStorage'],
    'no-console': ['warn'],
    'no-unneeded-ternary': [
      'warn',
      {
        defaultAssignment: false,
      },
    ],
    'no-confusing-arrow': ['off'],
    'no-unused-vars': 'off',
    'prettier/prettier': ['error'],
    'react/no-unused-prop-types': ['warn'],
    'react/no-redundant-should-component-update': ['warn'],
    'react/no-direct-mutation-state': ['error'],
    'react/no-string-refs': 'error',
    'react/prefer-stateless-function': ['warn'],
    'react/require-default-props': ['warn'],
    'react/require-optimization': ['warn'],
    'react/sort-comp': ['off'],
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-key': ['error'],
    'react/jsx-no-literals': ['off'],
    'jsx-a11y/no-static-element-interactions': ['warn'],
  },
};
