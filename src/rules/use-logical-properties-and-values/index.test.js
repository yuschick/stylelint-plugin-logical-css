import rule from './index.js';
import { logicalProperties } from '../../utils/logical.js';
import { physicalPropertiesMap } from '../../utils/physicalPropertiesMap.js';

const { messages, ruleName } = rule.rule;

/* eslint-disable-next-line no-undef  */
testRule({
  ruleName,
  config: [true],
  plugins: ['./index.js'],
  fix: true,
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
    {
      code: 'div { box-orient: block-axis; };',
      description: 'Testing to -webkit-box-orient property',
    },
    {
      code: 'div { transition: inline-size 1s ease; };',
      description: 'Testing a transition property with logical property value.',
    },
    {
      code: 'div { transition: inline-size 1s ease, block-size 1s ease; };',
      description: 'Testing a transition property with logical property value.',
    },
    {
      code: 'div { transition: inline-size var(--width-duration) ease block-size var(--height-duration) ease; };',
      description: 'Testing a transition property with logical property value.',
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
      code: 'div { background-position-x: right; };',
      description: 'Testing to background-position-x property to skip',
    },
    {
      code: 'div { background-position-y: bottom; };',
      description: 'Testing to background-position-y property to skip',
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
      code: 'div { -webkit-mask-position: top right; };',
      description: 'Testing to -webkit-mask-position property to skip',
    },
    {
      code: 'div { mask-position: top right; };',
      description: 'Testing to mask-position property to skip',
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
      code: 'table { caption-side: bottom; };',
      description: 'Testing block-xx caption side property to skip',
    },
    {
      code: 'table { caption-side: top; };',
      description: 'Testing block-xx caption side property to skip',
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
      fixed: `body { ${physicalPropertiesMap[property]}: 1rem; };`,
    })),

    // VALUES
    {
      code: 'div { transition: width 1s ease; };',
      description: 'Using a transition property with physical property value.',
      message: messages.unexpectedTransitionValue('width', 'inline-size'),
      fixed: 'div { transition: inline-size 1s ease; };',
    },
    {
      code: 'div { transition: width 1s ease, opacity 1s ease; };',
      description:
        'Using a transition property with physical property value and unrelated value.',
      message: messages.unexpectedTransitionValue('width', 'inline-size'),
      fixed: 'div { transition: inline-size 1s ease, opacity 1s ease; };',
    },
    {
      code: 'div { transition: width 1s ease, height 1s ease; };',
      description:
        'Using a transition property with multiple physical property values.',
      message: messages.unexpectedTransitionValue('height', 'block-size'),
      fixed: 'div { transition: inline-size 1s ease, block-size 1s ease; };',
    },
    {
      code: 'div { transition: border-top 1s ease, opacity 1s var(--test-width-var); };',
      description:
        'Using a transition property with multiple physical property values.',
      message: messages.unexpectedTransitionValue(
        'border-top',
        'border-block-start',
      ),
      fixed:
        'div { transition: border-block-start 1s ease, opacity 1s var(--test-width-var); };',
    },
    {
      code: 'p { -webkit-box-orient: vertical; };',
      description: 'Using a physical -webkit-box-orient value',
      message: messages.unexpectedValue(
        '-webkit-box-orient',
        'vertical',
        'block-axis',
      ),
      fixed: 'p { -webkit-box-orient: block-axis; };',
    },
    {
      code: 'p { -webkit-box-orient: horizontal; };',
      description: 'Using a physical -webkit-box-orient value',
      message: messages.unexpectedValue(
        '-webkit-box-orient',
        'horizontal',
        'inline-axis',
      ),
      fixed: 'p { -webkit-box-orient: inline-axis; };',
    },
    {
      code: 'p { -moz-box-orient: horizontal; };',
      description: 'Using a physical -moz-box-orient value',
      message: messages.unexpectedValue(
        '-moz-box-orient',
        'horizontal',
        'inline-axis',
      ),
      fixed: 'p { -moz-box-orient: inline-axis; };',
    },
    {
      code: 'p { box-orient: vertical; };',
      description: 'Using a physical box-orient value',
      message: messages.unexpectedValue('box-orient', 'vertical', 'block-axis'),
      fixed: 'p { box-orient: block-axis; };',
    },
    {
      code: 'p { box-orient: horizontal; };',
      description: 'Using a physical box-orient value',
      message: messages.unexpectedValue(
        'box-orient',
        'horizontal',
        'inline-axis',
      ),
      fixed: 'p { box-orient: inline-axis; };',
    },
    {
      code: 'table { caption-side: left; };',
      description: 'Using a physical caption-side value',
      message: messages.unexpectedValue('caption-side', 'left', 'inline-start'),
      fixed: 'table { caption-side: inline-start; };',
    },
    {
      code: 'table { caption-side: right; };',
      description: 'Using a physical caption-side value',
      message: messages.unexpectedValue('caption-side', 'right', 'inline-end'),
      fixed: 'table { caption-side: inline-end; };',
    },
    {
      code: 'div { clear: left; };',
      description: 'Using a physical clear value',
      message: messages.unexpectedValue('clear', 'left', 'inline-start'),
      fixed: 'div { clear: inline-start; };',
    },
    {
      code: 'div { clear: right; };',
      description: 'Using a physical clear value',
      message: messages.unexpectedValue('clear', 'right', 'inline-end'),
      fixed: 'div { clear: inline-end; };',
    },
    {
      code: 'div { float: left; };',
      description: 'Using a physical float value',
      message: messages.unexpectedValue('float', 'left', 'inline-start'),
      fixed: 'div { float: inline-start; };',
    },
    {
      code: 'div { float: right; };',
      description: 'Using a physical float value',
      message: messages.unexpectedValue('float', 'right', 'inline-end'),
      fixed: 'div { float: inline-end; };',
    },
    {
      code: 'div { resize: horizontal; };',
      description: 'Using a physical resize value',
      message: messages.unexpectedValue('resize', 'horizontal', 'inline'),
      fixed: 'div { resize: inline; };',
    },
    {
      code: 'div { resize: vertical; };',
      description: 'Using a physical resize value',
      message: messages.unexpectedValue('resize', 'vertical', 'block'),
      fixed: 'div { resize: block; };',
    },

    {
      code: 'h1 { text-align: left; };',
      description: 'Using a physical text-align value',
      message: messages.unexpectedValue('text-align', 'left', 'start'),
      fixed: 'h1 { text-align: start; };',
    },
    {
      code: 'h1 { text-align: right; };',
      description: 'Using a physical text-align value',
      message: messages.unexpectedValue('text-align', 'right', 'end'),
      fixed: 'h1 { text-align: end; };',
    },
  ],
});

/* eslint-disable-next-line no-undef  */
testRule({
  ruleName,
  config: [true, { ignore: ['overflow-y'] }],
  plugins: ['./index.js'],
  accept: [
    {
      code: `div { overflow-y: auto; };`,
      description: 'Allow overflow-y when the option is disabled with false.',
    },
  ],
});
