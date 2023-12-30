import stylelint from 'stylelint';

export const ruleName = 'plugin/use-logical-properties-and-values';

export const ruleMessages = stylelint.utils.ruleMessages(ruleName, {
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

export const ruleMeta = {
  url: 'https://github.com/yuschick/stylelint-plugin-logical-css',
};
