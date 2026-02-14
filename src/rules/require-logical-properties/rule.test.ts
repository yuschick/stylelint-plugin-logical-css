import { logicalProperties } from '../../utils/logical';
import { PhysicalProperty } from '../../utils/physical';
import { messages, name } from './meta';
import { physicalToLogicalPropertyMap } from './utils';

testRule({
  config: [true],
  ruleName: name,
  /* eslint-disable sort-keys */
  accept: [
    ...Object.values(logicalProperties).map((property) => ({
      code: `h1 { ${property}: 1rem; };`,
      description: `Using the ${property} property`,
    })),
  ],

  reject: [
    ...Object.keys(physicalToLogicalPropertyMap).map((property) => ({
      code: `body { ${property}: 1rem; };`,
      description: `Using the physical ${property} property`,
      message: messages.error(
        property,
        physicalToLogicalPropertyMap[property as PhysicalProperty],
      ),
      fixed: `body { ${physicalToLogicalPropertyMap[property as PhysicalProperty]}: 1rem; };`,
    })),
    {
      code: `body { WIDTH: 100%; }`,
      description: 'Case insensitivity for property names',
      message: messages.error(
        'WIDTH',
        physicalToLogicalPropertyMap['width' as PhysicalProperty],
      ),
      fixed: `body { ${physicalToLogicalPropertyMap['width' as PhysicalProperty]}: 100%; };`,
    },
    {
      code: `body { -webkit-width: 100%; }`,
      description: 'Made up -webkit-width prefix to test fix capabilities',
      message: messages.error(
        '-webkit-width',
        physicalToLogicalPropertyMap['width' as PhysicalProperty],
      ),
      fixed: `body { -webkit-${physicalToLogicalPropertyMap['width' as PhysicalProperty]}: 100%; };`,
    },
  ],
  /* eslint-enable sort-keys */
});

testRule({
  config: [true, { ignore: ['height', 'width'] }],
  ruleName: name,
  /* eslint-disable sort-keys */
  accept: [
    {
      code: 'div { width: 100dvi; };',
      description: 'Allow width property when the property is ignored.',
    },
    {
      code: 'div { height: 100dvi; };',
      description: 'Allow height property when the property is ignored.',
    },
  ],
  /* eslint-enable sort-keys */
});
