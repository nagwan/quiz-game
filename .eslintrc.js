module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/airbnb",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/script-indent": "off",
    quotes: [2, "double", { avoidEscape: true }],
    semi: 0,
    "import/no-cycle": 0,
    "vue/component-tags-order": ["error", {
      order: ["script", "template", "style"],
    }],
    "vue/first-attribute-linebreak": ["error", {
      singleline: "ignore",
      multiline: "below",
    }],
    "vue/no-v-html": 1,
    "vue/max-attributes-per-line": ["error", {
      singleline: 2,
      multiline: 2,
    }],
    "vue/require-default-prop": 2,
    "vue/require-prop-types": 2,
    "no-use-before-define": "off",
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/name-property-casing": ["error", "PascalCase"],
    indent: "off",
    "no-console": 2,
    "max-len": "off", // leave the control to vue/max-len
    "vue/max-len": ["error", {
      code: 250,
      template: 250,
      tabWidth: 2,
      comments: 250,
      ignorePattern: "",
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
      ignoreHTMLAttributeValues: false,
      ignoreHTMLTextContents: false,
    }],
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "template-curly-spacing": "off",
  },
};
