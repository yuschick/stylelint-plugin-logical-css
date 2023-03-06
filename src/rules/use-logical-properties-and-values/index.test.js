'use strict';

const {
  rule: { messages, ruleName },
} = require('./index.js');

const { logicalProperties } = require('../../utils/logical');
const { physicalPropertiesMap } = require('../../utils/physicalPropertiesMap');

/* eslint-disable-next-line no-undef  */
testRule({
  ruleName,
  config: [true],
  plugins: ['./index.js'],
  accept: [
    // PROPERTIES
    ...Object.values(logicalProperties).map((property) => ({
      code: `h1 { ${property}: 1rem; };`,
      description: `Using the ${property} property`,
    })),

    {
      code: 'div { -webkit-box-orient: block-axis; };',
      description: 'Testing to -webkit-box-orient property',
    },

    // PROPERTIES TO SKIP
    {
      code: 'div { background: url() top left no-repeat; };',
      description: 'Testing to background property to skip',
    },
    {
      code: 'div { background-position: bottom; };',
      description: 'Testing to background-position property to skip',
    },
    {
      code: 'div { grid-area: bottom; };',
      description: 'Testing to grid-area property to skip',
    },
    {
      code: 'div { grid-template-areas: left right; };',
      description: 'Testing to grid-template-areas property to skip',
    },
    {
      code: 'button { transform-origin: left; };',
      description: 'Testing to transform-origin property to skip',
    },
    {
      code: 'button { vertical-align: bottom; };',
      description: 'Testing to vertical-align property to skip',
    },

    // VALUES
    {
      code: 'table { display: flex; caption-side: block-start; };',
      description: 'Using a logical caption-side value',
    },
    {
      code: 'table { caption-side: block-end; };',
      description: 'Using a logical caption-side value',
    },
    {
      code: 'table { caption-side: inline-start; };',
      description: 'Using a logical caption-side value',
    },
    {
      code: 'table { caption-side: inline-end; };',
      description: 'Using a logical caption-side value',
    },
    {
      code: 'div { clear: inline-start; };',
      description: 'Using a logical clear value',
    },
    {
      code: 'div { clear: inline-end; };',
      description: 'Using a logical clear value',
    },
    {
      code: 'div { float: inline-start; };',
      description: 'Using a logical clear value',
    },
    {
      code: 'div { float: inline-end; };',
      description: 'Using a logical clear value',
    },
    {
      code: 'div { resize: block; };',
      description: 'Using a logical resize value',
    },
    {
      code: 'div { resize: inline; };',
      description: 'Using a logical resize value',
    },
    {
      code: 'h1 { text-align: start; };',
      description: 'Using a logical text-align value',
    },
    {
      code: 'h1 { text-align: end; };',
      description: 'Using a logical text-align value',
    },
  ],

  reject: [
    // PROPERTIES
    ...Object.keys(physicalPropertiesMap).map((property) => ({
      code: `body { ${property}: 1rem; };`,
      description: `Using the physical ${property} property`,
      message: messages.unexpectedProp(
        property,
        physicalPropertiesMap[property],
      ),
    })),

    // VALUEs
    {
      code: 'p { -webkit-box-orient: vertical; };',
      description: 'Using a physical -webkit-box-orient value',
      message: messages.unexpectedValue(
        '-webkit-box-orient',
        'vertical',
        'block-axis',
      ),
    },
    {
      code: 'p { -webkit-box-orient: horizontal; };',
      description: 'Using a physical -webkit-box-orient value',
      message: messages.unexpectedValue(
        '-webkit-box-orient',
        'horizontal',
        'inline-axis',
      ),
    },
    {
      code: 'table { caption-side: bottom; };',
      description: 'Using a physical caption-side value',
      message: messages.unexpectedValue('caption-side', 'bottom', 'block-end'),
    },
    {
      code: 'table { caption-side: left; };',
      description: 'Using a physical caption-side value',
      message: messages.unexpectedValue('caption-side', 'left', 'inline-start'),
    },
    {
      code: 'table { caption-side: right; };',
      description: 'Using a physical caption-side value',
      message: messages.unexpectedValue('caption-side', 'right', 'inline-end'),
    },
    {
      code: 'table { caption-side: top; };',
      description: 'Using a physical caption-side value',
      message: messages.unexpectedValue('caption-side', 'top', 'block-start'),
    },
    {
      code: 'div { clear: left; };',
      description: 'Using a physical clear value',
      message: messages.unexpectedValue('clear', 'left', 'inline-start'),
    },
    {
      code: 'div { clear: right; };',
      description: 'Using a physical clear value',
      message: messages.unexpectedValue('clear', 'right', 'inline-end'),
    },
    {
      code: 'div { float: left; };',
      description: 'Using a physical float value',
      message: messages.unexpectedValue('float', 'left', 'inline-start'),
    },
    {
      code: 'div { float: right; };',
      description: 'Using a physical float value',
      message: messages.unexpectedValue('float', 'right', 'inline-end'),
    },
    {
      code: 'div { resize: horizontal; };',
      description: 'Using a physical resize value',
      message: messages.unexpectedValue('resize', 'horizontal', 'inline'),
    },
    {
      code: 'div { resize: vertical; };',
      description: 'Using a physical resize value',
      message: messages.unexpectedValue('resize', 'vertical', 'block'),
    },
    {
      code: 'h1 { text-align: left; };',
      description: 'Using a physical text-align value',
      message: messages.unexpectedValue('text-align', 'left', 'start'),
    },
    {
      code: 'h1 { text-align: right; };',
      description: 'Using a physical text-align value',
      message: messages.unexpectedValue('text-align', 'right', 'end'),
    },
  ],
});
