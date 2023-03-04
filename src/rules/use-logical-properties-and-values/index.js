"use strict";

// @todo add rule for enforcing logical viewport units
// @todo move to typescript

const stylelint = require("stylelint");
const { isPhysicalProperty } = require("../../utils/isPhysicalProperty");
const { isPhysicalValue } = require("../../utils/isPhysicalValue");

const ruleName = "plugin/use-logical-properties-and-values";

const ruleMessages = stylelint.utils.ruleMessages(ruleName, {
  unexpectedProp(physicalProperty, logicalProperty) {
    return `Unexpected "${physicalProperty}" property. Use "${logicalProperty}".`;
  },
  unexpectedValue(property, physicalValue, logicalValue) {
    return `Unexpected "${physicalValue}" value in "${property}" property. Use "${logicalValue}".`;
  },
});

const ruleMeta = {
  url: "",
};

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
        ? ruleMessages.unexpectedProp(decl.prop, "margin-block-start")
        : ruleMessages.unexpectedValue(decl.prop, decl.value, "start");

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
