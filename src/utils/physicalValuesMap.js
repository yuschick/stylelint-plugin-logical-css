const {
  logicalAxis,
  logicalInlinePoints,
  logicalValues,
} = require("./logical");
const {
  physicalAxis,
  physicalProperties,
  physicalValues,
} = require("./physical");

const physicalValuesMap = Object.freeze({
  [physicalProperties.captionSide]: {
    [physicalValues.bottom]: logicalValues.blockEnd,
    [physicalValues.left]: logicalValues.inlineStart,
    [physicalValues.right]: logicalValues.inlineEnd,
    [physicalValues.top]: logicalValues.blockStart,
  },
  [physicalProperties.clear]: {
    [physicalValues.left]: logicalValues.inlineStart,
    [physicalValues.right]: logicalValues.inlineEnd,
  },
  [physicalProperties.float]: {
    [physicalValues.left]: logicalValues.inlineStart,
    [physicalValues.right]: logicalValues.inlineEnd,
  },
  [physicalProperties.resize]: {
    [physicalAxis.x]: logicalAxis.inline,
    [physicalValues.y]: logicalAxis.block,
  },
  [physicalProperties.textAlign]: {
    [physicalValues.left]: logicalInlinePoints.start,
    [physicalValues.right]: logicalInlinePoints.end,
  },
});

module.exports = {
  physicalValuesMap,
};
