"use strict";

// @todo add rule for enforcing logical viewport units
// @todo move to typescript

const stylelint = require("stylelint");

const { ruleName, ruleMessages, ruleMeta } = require("./base");
const { isPhysicalProperty } = require("../../utils/isPhysicalProperty");
const { isPhysicalValue } = require("../../utils/isPhysicalValue");
const { physicalPropertiesMap } = require("../../utils/physicalPropertiesMap");
const { physicalValuesMap } = require("../../utils/physicalValuesMap");

/** @type {import('stylelint').Rule} */
const ruleFunction = () => {
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
            physicalPropertiesMap[decl.prop]
          )
        : ruleMessages.unexpectedValue(
            decl.prop,
            decl.value,
            physicalValuesMap[decl.prop][decl.value]
          );

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
