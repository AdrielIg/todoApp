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
    "plugin:react-hooks/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,

  },
  plugins: ["react", "react-hooks"],
  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
    // 'no-misused-promises': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-unused-vars': 'warn'

  },
};
