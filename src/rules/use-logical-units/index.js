import stylelint from 'stylelint';

import { ruleName, ruleMessages, ruleMeta } from './base.js';
import { getValueUnit, isPhysicalUnit } from '../../utils/isPhysicalUnit.js';
import { physicalUnitsMap } from '../../utils/physicalUnitsMap.js';

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

      if (
        Array.isArray(options?.ignore) &&
        options?.ignore.includes(physicalUnit)
      ) {
        return;
      }

      const message = ruleMessages.unexpectedUnit(
        physicalUnit,
        physicalUnitsMap[physicalUnit],
      );

      if (context.fix) {
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

export default stylelint.createPlugin(ruleName, ruleFunction);
