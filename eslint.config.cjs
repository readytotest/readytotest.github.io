const prettierPlugin = require("eslint-plugin-prettier");
const htmlEslintPlugin = require("@html-eslint/eslint-plugin");
const htmlEslintParser = require("@html-eslint/parser");
const pluginCypress = require("eslint-plugin-cypress/flat");

//https://eslint.org/docs/latest/rules/
//https://html-eslint.org/docs/rules

module.exports = [
  pluginCypress.configs.globals, // so we don't get all those eslint errors in the Cypress scripts about undefined variables
  pluginCypress.configs.recommended, // so we get the recommended Cypress rules
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        console: "readonly",
        localStorage: "readonly",
        setInterval: "readonly",
        window: "readonly",
        document: "readonly",
        fetch: "readonly",
        require: "readonly",
        Sentry: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  {
    files: ["**/*.js", "**/*.jsx", "**/*.cjs", "**/cy.js"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },

  {
    files: ["**/*.html", "**/*.htm"],
    plugins: {
      "@html-eslint": htmlEslintPlugin,
    },
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
