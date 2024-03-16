import rule from './index.js';
import { logicalUnits } from '../../utils/logical.js';
import { physicalUnitsMap } from '../../utils/physicalUnitsMap.js';

const { messages, ruleName } = rule.rule;

/* eslint-disable-next-line no-undef  */
testRule({
  ruleName,
  config: [true],
  plugins: ['./index.js'],
  fix: true,
  accept: [
    ...Object.values(logicalUnits).map((unit) => ({
      code: `h1 { block-size: 100${unit}; };`,
      description: `Using the logical ${unit} unit`,
    })),
    {
      code: 'div { inline-size: min(80vi, 100%); };',
      description: 'Testing physical unit inside a function',
    },
    {
      code: 'div { inline-size: min(100%, 80vi) };',
      description: 'Testing physical unit inside a function',
    },
  ],

  reject: [
    ...Object.keys(physicalUnitsMap).map((unit) => ({
      code: `body { block-size: 100${unit}; };`,
      description: `Using the physical ${unit} unit`,
      message: messages.unexpectedUnit(unit, physicalUnitsMap[unit]),
      fixed: `body { block-size: 100${physicalUnitsMap[unit]}; };`,
    })),
    {
      code: 'div { inline-size: min(80vw, 100%) };',
      description: 'Testing physical unit inside a function',
      message: messages.unexpectedUnit('vw', physicalUnitsMap.vw),
      fixed: `div { inline-size: min(80vi, 100%) };`,
    },
    {
      code: 'div { inline-size: 80vh; };',
      description: 'Testing physical unit inside a clamp function',
      message: messages.unexpectedUnit('vh', physicalUnitsMap.vh),
      fixed: `div { inline-size: 80vb; };`,
    },
    {
      code: 'div { inline-size: clamp(80vh, 50%, 90vw); };',
      description: 'Testing physical unit inside a clamp function',
      message: messages.unexpectedUnit(
        'vh,vw',
        `${physicalUnitsMap.vh},${physicalUnitsMap.vw}`,
      ),
      fixed: `div { inline-size: clamp(80vb, 50%, 90vi); };`,
    },
  ],
});

/* eslint-disable-next-line no-undef  */
testRule({
  ruleName,
  config: [true, { ignore: ['dvh'] }],
  plugins: ['./index.js'],
  accept: [
    {
      code: 'div { top: 1dvh; };',
      description: 'Allow dvh unit when the option is disabled.',
    },
  ],
  reject: [
    {
      code: 'div { top: 1dvw; };',
      description: 'Using a physical unit that is not disabled in the options.',
      message: messages.unexpectedUnit('dvw', 'dvi'),
    },
  ],
});
