import { messages, name } from './meta';
import {
  PhysicalKeyword,
  PhysicalKeywordProperty,
  physicalToLogicalKeywordMap,
} from './utils';

testRule({
  config: [true],
  ruleName: name,
  /* eslint-disable sort-keys */
  accept: [
    ...(Object.keys(physicalToLogicalKeywordMap) as PhysicalKeywordProperty[]).flatMap(
      (key) => {
        const property = physicalToLogicalKeywordMap[key];

        return Object.keys(property).map((physicalKeyword) => ({
          code: `div { ${key}: ${property[physicalKeyword as PhysicalKeyword]}; }`,
          description: `Using ${key} with logical value ${physicalKeyword}`,
        }));
      },
    ),
    {
      code: 'div { resize: both; }',
      description: 'Using resize with both value',
    },
    {
      code: 'div { resize: var(--horizontal); }',
      description: 'Using resize with custom property value named with physical axis',
    },
  ],

  reject: [
    ...(Object.keys(physicalToLogicalKeywordMap) as PhysicalKeywordProperty[]).flatMap(
      (key) => {
        const property = physicalToLogicalKeywordMap[key];

        return Object.keys(property).map((physicalKeyword) => ({
          code: `div { ${key}: ${physicalKeyword}; }`,
          description: `Using ${key} with physical value ${physicalKeyword}`,
          fixed: `div { ${key}: ${property[physicalKeyword as PhysicalKeyword]}; }`,
          message: messages.error(
            physicalKeyword,
            property[physicalKeyword as PhysicalKeyword] ?? '',
          ),
        }));
      },
    ),
    {
      code: 'div { resize: horizontal vertical; }',
      description: 'Using resize with physical values horizontal and vertical',
      fixed: 'div { resize: inline block; }',
      warnings: [
        {
          message: messages.error(
            'horizontal',
            physicalToLogicalKeywordMap['resize']?.['horizontal'] ?? '',
          ),
        },
        {
          message: messages.error(
            'vertical',
            physicalToLogicalKeywordMap['resize']?.['vertical'] ?? '',
          ),
        },
      ],
    },
    {
      code: 'div { resize: inline vertical; }',
      description: 'Using resize with physical and logical values',
      fixed: 'div { resize: inline block; }',
      message: messages.error(
        'vertical',
        physicalToLogicalKeywordMap['resize']?.['vertical'] ?? '',
      ),
    },
  ],
  /* eslint-enable sort-keys */
});

testRule({
  config: [true, { ignore: ['offset-anchor', 'offset-position'] }],
  ruleName: name,
  /* eslint-disable sort-keys */
  accept: [
    {
      code: 'div { offset-anchor: top; };',
      description: 'Allow offset-anchor property when the property is ignored.',
    },
    {
      code: 'div { offset-position: bottom left; };',
      description: 'Allow offset-position property when the property is ignored.',
    },
  ],
  /* eslint-enable sort-keys */
});
