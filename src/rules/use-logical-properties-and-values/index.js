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
      const physicalTransitionProperties =
        isTransitionProperty &&
        Object.values(physicalProperties)
          .flatMap((property) => {
            const exp = new RegExp(`(^|[^\\w-])${property}([^\\w-]|$)`);
            return decl.value.match(exp);
          })
          .filter((p) => p && p.trim());

      const propIsPhysical = isPhysicalProperty(decl.prop);
      const valueIsPhysical = isPhysicalValue(decl.value);

      if (
        !propIsPhysical &&
        !valueIsPhysical &&
        !physicalTransitionProperties.length
      ) {
        return;
      }

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
      if (physicalTransitionProperties.length) {
        const propertyToFlag = physicalTransitionProperties[0].trim();
        message = ruleMessages.unexpectedTransitionValue(
          propertyToFlag,
          physicalPropertiesMap[propertyToFlag],
        );
      }

      if (context.fix && !options?.['disable-auto-fix']) {
        if (propIsPhysical) {
          decl.prop = physicalPropertiesMap[rootProp];
        }

        if (valueIsPhysical) {
          decl.value = physicalValuesMap[rootProp][decl.value];
        }

        if (physicalTransitionProperties.length) {
          let newValue = decl.value;
          physicalTransitionProperties.forEach((property) => {
            newValue = newValue.replace(
              property.trim(),
              physicalPropertiesMap[property.trim()],
            );
          });

          decl.value = newValue;
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
