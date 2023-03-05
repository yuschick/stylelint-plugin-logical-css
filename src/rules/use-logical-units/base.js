'use strict';

const stylelint = require('stylelint');

const ruleName = 'plugin/use-logical-units';

const ruleMessages = stylelint.utils.ruleMessages(ruleName, {
  unexpectedUnit(physicalUnit, logicalUnit) {
    return `Unexpected "${physicalUnit}" unit. Use "${logicalUnit}".`;
  },
});

const ruleMeta = {
  url: 'https://github.com/yuschick/stylelint-plugin-logical-css',
};

module.exports = {
  ruleName,
  ruleMessages,
  ruleMeta,
};
