"use strict";

const {
  rule: { messages, ruleName },
} = require("./index.js");

// eslint-disable-next-line no-undef
testRule({
  ruleName,
  config: [true],
  plugins: ["./index.js"],
  accept: [
    // PROPERTIES
    {
      code: "h1 { margin-block-start: 1rem; };",
      description: "Using a logical margin property",
    },

    // VALUES
    {
      code: "h1 { text-align: start; };",
      description: "Using a logical text-align value",
    },
    {
      code: "table { caption-side: block-start; };",
      description: "Using a logical caption-side value",
    },
  ],

  reject: [
    // PROPERTIES
    {
      code: "h1 { margin-top: 1rem; };",
      description: "Using a physical margin property",
      message: messages.unexpectedProp("margin-top", "margin-block-start"),
    },

    // VALUEs
    {
      code: "table { caption-side: right; };",
      description: "Using a physical caption-side value",
      message: messages.unexpectedValue("caption-side", "right", "inline-end"),
    },
    {
      code: "h1 { text-align: left; };",
      description: "Using a physical text-align value",
      message: messages.unexpectedValue("text-align", "left", "start"),
    },
  ],
});
