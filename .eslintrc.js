module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "flowtype",
    "jest"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": ["warn"],
    "no-underscore-dangle": ["off"],
    "class-methods-use-this": ["warn"],
    "consistent-return": ["warn"],
    "no-use-before-define": ["off"],
    "no-unused-vars": ["error", {"args": "all", "argsIgnorePattern": "^_"}],
    "import/extensions": [0],
    "import/no-unresolved": [2, { "ignore": ["^[~]"] }],
    "no-constant-condition": ["off"],
  },
  "globals": {
    "describe": true,
    "context": true,
    "it": true,
    "expect": true,
    "__DEV__": true,
    "fetch": true,
    "localStorage": true,
    "beforeAll": true,
    "afterAll": true,
    "xit": true,
    "jest": true,
  },
};