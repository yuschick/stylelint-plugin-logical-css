"use strict";

const {
  rule: { messages, ruleName },
} = require("./index.js");

const { logicalProperties } = require("../../utils/logical");
const { physicalPropertiesMap } = require("../../utils/physicalPropertiesMap");

testRule({
  ruleName,
  config: [true],
  plugins: ["./index.js"],
  accept: [
    // PROPERTIES
    ...Object.values(logicalProperties).map((property) => ({
      code: `h1 { ${property}: 1rem; };`,
      description: `Using the ${property} property`,
    })),

    // VALUES
    {
      code: "table { caption-side: block-start; };",
      description: "Using a logical caption-side value",
    },
    {
      code: "table { caption-side: block-end; };",
      description: "Using a logical caption-side value",
    },
    {
      code: "table { caption-side: inline-start; };",
      description: "Using a logical caption-side value",
    },
    {
      code: "table { caption-side: inline-end; };",
      description: "Using a logical caption-side value",
    },
    {
      code: "div { clear: inline-start; };",
      description: "Using a logical clear value",
    },
    {
      code: "div { clear: inline-end; };",
      description: "Using a logical clear value",
    },
    {
      code: "div { float: inline-start; };",
      description: "Using a logical clear value",
    },
    {
      code: "div { float: inline-end; };",
      description: "Using a logical clear value",
    },
    {
      code: "div { resize: block; };",
      description: "Using a logical resize value",
    },
    {
      code: "div { resize: inline; };",
      description: "Using a logical resize value",
    },
    {
      code: "h1 { text-align: start; };",
      description: "Using a logical text-align value",
    },
    {
      code: "h1 { text-align: end; };",
      description: "Using a logical text-align value",
    },
  ],

  reject: [
    // PROPERTIES
    ...Object.keys(physicalPropertiesMap).map((property) => ({
      code: `body { ${property}: 1rem; };`,
      description: `Using the physical ${property} property`,
      message: messages.unexpectedProp(
        property,
        physicalPropertiesMap[property]
      ),
    })),

    // VALUEs
    {
      code: "table { caption-side: bottom; };",
      description: "Using a physical caption-side value",
      message: messages.unexpectedValue("caption-side", "bottom", "block-end"),
    },
    {
      code: "table { caption-side: left; };",
      description: "Using a physical caption-side value",
      message: messages.unexpectedValue("caption-side", "left", "inline-start"),
    },
    {
      code: "table { caption-side: right; };",
      description: "Using a physical caption-side value",
      message: messages.unexpectedValue("caption-side", "right", "inline-end"),
    },
    {
      code: "table { caption-side: top; };",
      description: "Using a physical caption-side value",
      message: messages.unexpectedValue("caption-side", "top", "block-start"),
    },
    {
      code: "div { clear: left; };",
      description: "Using a physical clear value",
      message: messages.unexpectedValue("clear", "left", "inline-start"),
    },
    {
      code: "div { clear: right; };",
      description: "Using a physical clear value",
      message: messages.unexpectedValue("clear", "right", "inline-end"),
    },
    {
      code: "div { float: left; };",
      description: "Using a physical float value",
      message: messages.unexpectedValue("float", "left", "inline-start"),
    },
    {
      code: "div { float: right; };",
      description: "Using a physical float value",
      message: messages.unexpectedValue("float", "right", "inline-end"),
    },
    {
      code: "div { resize: horizontal; };",
      description: "Using a physical resize value",
      message: messages.unexpectedValue("resize", "horizontal", "inline"),
    },
    {
      code: "div { resize: vertical; };",
      description: "Using a physical resize value",
      message: messages.unexpectedValue("resize", "vertical", "block"),
    },
    {
      code: "h1 { text-align: left; };",
      description: "Using a physical text-align value",
      message: messages.unexpectedValue("text-align", "left", "start"),
    },
    {
      code: "h1 { text-align: right; };",
      description: "Using a physical text-align value",
      message: messages.unexpectedValue("text-align", "right", "end"),
    },
  ],
});
