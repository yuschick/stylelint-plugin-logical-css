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
      if (
        Array.isArray(options?.ignore) &&
        options?.ignore.includes(rootProp)
      ) {
        return;
      }

      vendorPrefixes.forEach(
        (prefix) => (rootProp = rootProp.replace(prefix, '')),
      );

      const isValidProp = [
        ...Object.values(physicalProperties),
        'transition',
      ].includes(rootProp);
      if (!isValidProp) return;

      const isTransitionProperty = rootProp === 'transition';
      const physicalTransitionValue =
        isTransitionProperty &&
        Object.values(physicalProperties).find((property) =>
          decl.value.includes(property) ? property : null,
        );
      const propIsPhysical = isPhysicalProperty(decl.prop);
      const valueIsPhysical = isPhysicalValue(decl.value);

      if (!propIsPhysical && !valueIsPhysical && !physicalTransitionValue)
        return;

      let message;

      if (propIsPhysical) {
        message = ruleMessages.unexpectedProp(
          decl.prop,
          physicalPropertiesMap[rootProp],
        );
      }
      if (valueIsPhysical) {
        message = ruleMessages.unexpectedValue(
          decl.prop,
          decl.value,
          physicalValuesMap[rootProp][decl.value],
        );
      }

      if (physicalTransitionValue) {
        message = ruleMessages.unexpectedTransitionValue(
          physicalTransitionValue,
          physicalPropertiesMap[physicalTransitionValue],
        );
      }

      if (context.fix && !options?.['disable-auto-fix']) {
        if (propIsPhysical) {
          decl.prop = physicalPropertiesMap[rootProp];
        }

        if (valueIsPhysical) {
          decl.value = physicalValuesMap[rootProp][decl.value];
        }

        if (physicalTransitionValue) {
          decl.value = decl.value.replace(
            physicalTransitionValue,
            physicalPropertiesMap[physicalTransitionValue],
          );
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
