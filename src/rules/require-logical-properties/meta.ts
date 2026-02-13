import stylelint, { RuleMeta } from 'stylelint';

const { ruleMessages } = stylelint.utils;

export const name = 'logical-css/require-logical-properties';

export const messages = ruleMessages(name, {
  error: (physicalProperty: string, logicalProperty: string) =>
    `Unexpected physical CSS property ${physicalProperty}. Please use the logical equivalent — ${logicalProperty}`,
});

export const meta: RuleMeta = {
  deprecated: false,
  fixable: true,
  url: 'https://github.com/yuschick/stylelint-plugin-logical-css',
};
