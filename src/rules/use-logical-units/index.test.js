"use strict";

const {
  rule: { messages, ruleName },
} = require("./index.js");

const { logicalUnits } = require("../../utils/logical");
const { physicalUnitsMap } = require("../../utils/physicalUnitsMap");
// const { getValueUnit } = require("../../utils/isPhysicalUnit");

testRule({
  ruleName,
  config: [true],
  plugins: ["./index.js"],
  accept: [
    ...Object.values(logicalUnits).map((unit) => ({
      code: `h1 { block-size: 100${unit}; };`,
      description: `Using the logical ${unit} unit`,
    })),
  ],

  reject: [
    ...Object.keys(physicalUnitsMap).map((unit) => ({
      code: `body { block-size: 100${unit}; };`,
      description: `Using the physical ${unit} unit`,
      message: messages.unexpectedUnit(unit, physicalUnitsMap[unit]),
    })),
  ],
});
