'use strict';

const stylelint = require('stylelint');

const { ruleName, ruleMessages, ruleMeta } = require('./base');
const { vendorPrefixes } = require('../../utils/vendorPrefixes');
const { physicalProperties } = require('../../utils/physical');
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
      let rootProp = decl.prop;
      if (options?.[rootProp] === false || options?.[rootProp] === 'off') {
        return;
      }

      vendorPrefixes.forEach(
        (prefix) => (rootProp = rootProp.replace(prefix, '')),
      );

      const isValidProp = Object.values(physicalProperties).includes(rootProp);
      if (!isValidProp) return;

      const propIsPhysical = isPhysicalProperty(decl.prop);
      const valueIsPhysical = isPhysicalValue(decl.value);

      if (!propIsPhysical && !valueIsPhysical) return;

      const message = propIsPhysical
        ? ruleMessages.unexpectedProp(
            decl.prop,
            physicalPropertiesMap[rootProp],
          )
        : ruleMessages.unexpectedValue(
            decl.prop,
            decl.value,
            physicalValuesMap[rootProp][decl.value],
          );

      if (context.fix && options?.['enable-auto-fix']) {
        if (propIsPhysical) {
          decl.prop = physicalPropertiesMap[rootProp];
        }

        if (valueIsPhysical) {
          decl.value = physicalValuesMap[rootProp][decl.value];
        }

        return;
      }

      stylelint.utils.report({
        column: decl.source.start.column,
        endColumn: rootProp.length,
        line: decl.source.start.line,
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
