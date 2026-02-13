/**
 * @author Daniel Yuschick
 * @fileoverview Rule to enforce the use of logical CSS units over physical units.
 * @license MIT
 */

import stylelint, { Rule } from 'stylelint';
import { messages, meta, name } from './meta';
import { fixOption, FixProps, severityOption, SeverityProps } from '../../utils/types';
import { PhysicalUnit, physicalUnits } from '../../utils/physical';
import { getValueUnit, isPhysicalUnit, physicalToLogicalUnitMap } from './utils';

const { report, validateOptions } = stylelint.utils;

interface SecondaryOptions extends FixProps, SeverityProps {
  ignore?: PhysicalUnit[];
}

export const requireLogicalUnits: Rule = (
  primaryOption,
  secondaryOptions: SecondaryOptions = {},
) => {
  return (root, result) => {
    const validOptions = validateOptions(
      result,
      name,
      {
        actual: primaryOption,
        possible: [true, false],
      },
      {
        actual: secondaryOptions,
        optional: true,
        possible: {
          ...severityOption,
          ...fixOption,
          ignore: [
            (value: unknown) => {
              return (
                typeof value === 'string' &&
                Object.values(physicalUnits).includes(value as PhysicalUnit)
              );
            },
          ],
        },
      },
    );

    if (!validOptions) return;

    const { severity = 'error' } = secondaryOptions;

    root.walkDecls((decl) => {
      const valueContainsPhysicalUnit = isPhysicalUnit(decl.value);

      if (!valueContainsPhysicalUnit) return;

      const physicalUnits = getValueUnit(decl.value);

      if (typeof physicalUnits === 'boolean') return;

      const physicalUnitsToReport = physicalUnits.filter((physicalUnit) => {
        const ignore = secondaryOptions?.ignore;

        if (Array.isArray(ignore) && ignore.includes(physicalUnit)) {
          return false;
        }

        return true;
      });

      if (!physicalUnitsToReport.length) return;

      physicalUnitsToReport.forEach((unit) => {
        const logicalUnit = physicalToLogicalUnitMap[unit];

        report({
          fix: () => {
            const fixedValue = decl.value.replace(
              new RegExp(`${unit}(?![a-z])`, 'gi'),
              logicalUnit,
            );
            decl.value = fixedValue;
          },
          message: messages.error(unit, logicalUnit),
          node: decl,
          result,
          ruleName: name,
          severity,
        });
      });
    });
  };
};

requireLogicalUnits.ruleName = name;
requireLogicalUnits.messages = messages;
requireLogicalUnits.meta = meta;
