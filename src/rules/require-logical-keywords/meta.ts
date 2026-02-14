import stylelint, { RuleMeta } from 'stylelint';

const { ruleMessages } = stylelint.utils;

export const name = 'logical-css/require-logical-keywords';

export const messages = ruleMessages(name, {
  error: (physicalKeyword: string, logicalKeyword: string) =>
    `Unexpected physical CSS directional keyword ${physicalKeyword}. Please use the logical equivalent — ${logicalKeyword}`,
});

export const meta: RuleMeta = {
  deprecated: false,
  fixable: true,
  url: 'https://github.com/yuschick/stylelint-plugin-logical-css',
};
