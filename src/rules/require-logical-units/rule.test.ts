import { logicalUnits } from '../../utils/logical';
import { PhysicalUnit } from '../../utils/physical';
import { messages, name } from './meta';
import { physicalToLogicalUnitMap } from './utils';

testRule({
  config: [true],
  ruleName: name,
  /* eslint-disable sort-keys */
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
    ...Object.keys(physicalToLogicalUnitMap).map((unit) => ({
      code: `body { block-size: 100${unit}; };`,
      description: `Using the physical ${unit} unit`,
      message: messages.error(unit, physicalToLogicalUnitMap[unit as PhysicalUnit]),
      fixed: `body { block-size: 100${physicalToLogicalUnitMap[unit as PhysicalUnit]}; };`,
    })),
    {
      code: 'div { inline-size: min(80vw, 100%) };',
      description: 'Testing physical unit inside a function',
      message: messages.error('vw', physicalToLogicalUnitMap.vw),
      fixed: `div { inline-size: min(80vi, 100%) };`,
    },
    {
      code: 'div { inline-size: 80vh; };',
      description: 'Testing physical unit inside a clamp function',
      message: messages.error('vh', physicalToLogicalUnitMap.vh),
      fixed: `div { inline-size: 80vb; };`,
    },
    {
      code: 'div { inline-size: clamp(80vh, 50%, 90vw); };',
      description: 'Testing physical unit inside a clamp function',
      warnings: [
        {
          message: messages.error('vh', `${physicalToLogicalUnitMap.vh}`),
        },
        {
          message: messages.error('vw', `${physicalToLogicalUnitMap.vw}`),
        },
      ],
      fixed: `div { inline-size: clamp(80vb, 50%, 90vi); };`,
    },
    {
      code: 'div { inline-size: 50.5vw; };',
      description: 'Testing float physical unit',
      message: messages.error('vw', physicalToLogicalUnitMap.vw),
      fixed: `div { inline-size: 50.5vi; };`,
    },
  ],
  /* eslint-enable sort-keys */
});

testRule({
  config: [true, { ignore: ['dvh'] }],
  ruleName: name,
  /* eslint-disable sort-keys */
  accept: [
    {
      code: 'div { top: 100dvh; };',
      description: 'Allow dvh unit when the option is disabled.',
    },
  ],
  reject: [
    {
      code: 'div { top: 100dvw; };',
      description: 'Using a physical unit that is not disabled in the options.',
      message: messages.error('dvw', physicalToLogicalUnitMap.dvw),
    },
    {
      code: 'div { inset: 100dvh 50vw 0 0; };',
      description:
        'Using multiple physical units in a shorthand property where one is ignored, but not the other',
      message: messages.error('vw', physicalToLogicalUnitMap.vw),
    },
  ],
  /* eslint-enable sort-keys */
});
