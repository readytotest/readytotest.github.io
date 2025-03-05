//https://eslint.org/docs/latest/rules/
//https://html-eslint.org/docs/rules

const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
  {
    plugins: {
      prettier: prettierPlugin,
      "@html-eslint": require("@html-eslint/eslint-plugin"),
    },
    languageOptions: {
      globals: {
        console: "readonly",
      },
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  {
    files: ["**/*.js", "**/*.jsx", "**/*.cjs"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },

  {
    files: ["**/*.html", "**/*.htm"],
    languageOptions: {
      parser: require("@html-eslint/parser"),
    },
    rules: {
      "@html-eslint/no-duplicate-id": "error",
    },
  },

  {
    ignores: ["node_modules/", ".vscode/*", ".DS_Store", "Thumbs.db"],
  },
];
