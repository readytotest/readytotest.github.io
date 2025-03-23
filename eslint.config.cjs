const prettierPlugin = require("eslint-plugin-prettier");
const htmlEslintPlugin = require("@html-eslint/eslint-plugin");
const htmlEslintParser = require("@html-eslint/parser");

//https://eslint.org/docs/latest/rules/
//https://html-eslint.org/docs/rules

module.exports = [
  {
    plugins: {
      prettier: prettierPlugin,
      "@html-eslint": htmlEslintPlugin,
      cypress: require("eslint-plugin-cypress"),
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
      parser: htmlEslintParser,
    },
    rules: {
      "@html-eslint/no-duplicate-id": "error",
    },
  },

  {
    ignores: ["node_modules/", ".vscode/*", ".DS_Store", "Thumbs.db"],
  },
];
