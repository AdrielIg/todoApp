module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "eslint-config-prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "react-hooks"],
  rules: {
    // "no-use-before-define": "off",
    // "@typescript-eslint/no-use-before-define": ["error"],
    // "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
    // "no-tabs": 0,
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    // "import/prefer-default-export": "off",
    // indent: "off",
    // "@typescript-eslint/indent": "off",
    // semi: [2, "always"],
    // quotes: [2, "double", { avoidEscape: true }],
    // "@typescript-eslint/quotes": [2, "double", { avoidEscape: true }],
    // "@typescript-eslint/semi": [2, "always"],
    // "@typescript-eslint/space-before-function-paren": "off"
  },
};
