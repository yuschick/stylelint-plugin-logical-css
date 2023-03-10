'use strict';

const stylelint = require('stylelint');

const { ruleName, ruleMessages, ruleMeta } = require('./base');
const { getValueUnit, isPhysicalUnit } = require('../../utils/isPhysicalUnit');
const { physicalUnitsMap } = require('../../utils/physicalUnitsMap');

const ruleFunction = (_, options, context) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName);

    if (!validOptions) {
      return;
    }

    root.walkDecls((decl) => {
      const unitIsPhysical = isPhysicalUnit(decl.value);

      if (!unitIsPhysical) return;

      const physicalUnit = getValueUnit(decl.value);
      const message = ruleMessages.unexpectedUnit(
        physicalUnit,
        physicalUnitsMap[physicalUnit],
      );

      if (context.fix && options?.['enable-auto-fix']) {
        decl.value = decl.value.replace(
          physicalUnit,
          physicalUnitsMap[physicalUnit],
        );

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
