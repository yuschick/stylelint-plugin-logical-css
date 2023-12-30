import stylelint from 'stylelint';

export const ruleName = 'plugin/use-logical-units';

export const ruleMessages = stylelint.utils.ruleMessages(ruleName, {
  unexpectedUnit(physicalUnit, logicalUnit) {
    return `Unexpected "${physicalUnit}" unit. Use "${logicalUnit}".`;
  },
});

export const ruleMeta = {
  url: 'https://github.com/yuschick/stylelint-plugin-logical-css',
};
