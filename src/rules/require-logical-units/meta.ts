import stylelint, { RuleMeta } from 'stylelint';

const { ruleMessages } = stylelint.utils;

export const name = 'logical-css/require-logical-units';

export const messages = ruleMessages(name, {
  error: (physicalUnit: string, logicalUnit: string) =>
    `Unexpected physical CSS unit ${physicalUnit}. Please use the logical equivalent — ${logicalUnit}`,
});

export const meta: RuleMeta = {
  deprecated: false,
  fixable: true,
  url: 'https://github.com/yuschick/stylelint-plugin-logical-css',
};
