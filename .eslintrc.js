module.exports = {
  parser:  'vue-eslint-parser',
  parserOptions: {
    "parser": "@typescript-eslint/parser",
  },
  extends:  [
    'plugin:@typescript-eslint/recommended',
    "plugin:vue/recommended",
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false,
        "tabWidth": 2
      }
    ]
  }
}