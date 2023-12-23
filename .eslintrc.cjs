module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: 1
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['react-refresh'],
  rules: {
    'semi': [2, "always"],
    // quotes
    // "prettier/prettier": ["error", { "singleQuote": true }],
    "quotes": ["error", "double", {
      "avoidEscape": true
    }],
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true
    }],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn", // or "error"
      {
        "argsIgnorePattern": "^_+$",
        "varsIgnorePattern": "^_+$",
        // "caughtErrorsIgnorePattern": "^_"
      }
    ]
  }
};
