module.exports = {
  env: {
    browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
    jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
    node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    'react-app', // Use the recommended rules from eslint-config-react-app (bundled with Create React App)
    'eslint:recommended', // Use the recommened rules from eslint
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Use the recommended rules from eslint-plugin-react
    'plugin:react-hooks/recommended', // Use the recommended rules from eslint-plugin-react-hooks
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint', // Allows for manually setting @typescript-eslint/* rules
    'react', // Allows for manually setting react/* rules
    'prettier', // Allows for manually setting prettier/* rules
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
  },
}
