import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPluggin from "eslint-plugin-react";
import { rules } from "@eslint/js/src/configs/eslint-all";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...reactPluggin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPluggin.configs.flat["jsx-runtime"],
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  prettier,
];
