# Lab9

La brach que utilicé al final fue la de testing.

Todos los paquetes utilizados.

npm i --save-dev webpack webpack-cli html-loader babel-loader css-loader file-loader clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin @babel/core @babel/preset-env @babel/preset-react eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

npm i react react-dom

npm install eslint --save-dev

Archivo .eslintrc.js:


module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],

  rules: {
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'import/no-default-export': 'error',
    'import/no-unresolved': 0,
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never',
      js: 'always',
      jsx: 'always',
      mjs: 'never',
    }],

  },
};
