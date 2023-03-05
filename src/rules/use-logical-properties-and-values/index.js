'use strict';

const stylelint = require('stylelint');

const { ruleName, ruleMessages, ruleMeta } = require('./base');
const { isPhysicalProperty } = require('../../utils/isPhysicalProperty');
const { isPhysicalValue } = require('../../utils/isPhysicalValue');
const { physicalPropertiesMap } = require('../../utils/physicalPropertiesMap');
const { physicalValuesMap } = require('../../utils/physicalValuesMap');

const ruleFunction = (_, options, context) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName);

    if (!validOptions) {
      return;
    }

    root.walkDecls((decl) => {
      const propIsPhysical = isPhysicalProperty(decl.prop);
      const valueIsPhysical = isPhysicalValue(decl.value);

      if (!propIsPhysical && !valueIsPhysical) return;

      const message = propIsPhysical
        ? ruleMessages.unexpectedProp(
            decl.prop,
            physicalPropertiesMap[decl.prop],
          )
        : ruleMessages.unexpectedValue(
            decl.prop,
            decl.value,
            physicalValuesMap[decl.prop][decl.value],
          );

      if (context.fix && options?.['enable-auto-fix']) {
        if (propIsPhysical) {
          decl.prop = physicalPropertiesMap[decl.prop];
        }

        if (valueIsPhysical) {
          decl.value = physicalValuesMap[decl.value];
        }

        return;
      }

      stylelint.utils.report({
        message,
        node: decl,
        result,
        ruleName,
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = ruleMessages;
ruleFunction.meta = ruleMeta;

module.exports = stylelint.createPlugin(ruleName, ruleFunction);
