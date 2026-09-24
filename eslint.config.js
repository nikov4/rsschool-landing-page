import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  pluginJs.configs.recommended,
  eslintPluginUnicorn.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
    },
  },
  eslintPluginPrettierRecommended,
];
