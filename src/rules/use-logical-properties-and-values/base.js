'use strict';

const stylelint = require('stylelint');

const ruleName = 'plugin/use-logical-properties-and-values';

const ruleMessages = stylelint.utils.ruleMessages(ruleName, {
  unexpectedProp(physicalProperty, logicalProperty) {
    return `Unexpected "${physicalProperty}" property. Use "${logicalProperty}".`;
  },
  unexpectedValue(property, physicalValue, logicalValue) {
    return `Unexpected "${physicalValue}" value in "${property}" property. Use "${logicalValue}".`;
  },
  unexpectedTransitionValue(physicalValue, logicalValue) {
    return `Unexpected "${physicalValue}" value in "transition" property. Use "${logicalValue}".`;
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
