import { logicalAxis, logicalInlinePoints, logicalValues } from './logical.js';
import {
  physicalAxis,
  physicalProperties,
  physicalValues,
} from './physical.js';

export const physicalValuesMap = Object.freeze({
  [physicalProperties.boxOrient]: {
    [physicalAxis.horizontal]: `${logicalAxis.inline}-axis`,
    [physicalAxis.vertical]: `${logicalAxis.block}-axis`,
  },
  [physicalProperties.captionSide]: {
    [physicalValues.left]: logicalValues.inlineStart,
    [physicalValues.right]: logicalValues.inlineEnd,
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
    [physicalAxis.horizontal]: logicalAxis.inline,
    [physicalAxis.vertical]: logicalAxis.block,
  },
  [physicalProperties.textAlign]: {
    [physicalValues.left]: logicalInlinePoints.start,
    [physicalValues.right]: logicalInlinePoints.end,
  },
});
