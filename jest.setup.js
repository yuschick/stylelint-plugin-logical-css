"use strict";

const { getTestRule } = require("jest-preset-stylelint");

global.testRule = getTestRule({
  plugins: [
    "./src/rules/use-logical-properties-and-values",
    "./src/rules/use-logical-units",
  ],
});
