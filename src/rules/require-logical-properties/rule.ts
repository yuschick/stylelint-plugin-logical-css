/**
 * @author Daniel Yuschick
 * @fileoverview Rule to enforce the use of logical CSS properties over physical properties.
 * @license MIT
 */

import stylelint, { Rule } from 'stylelint';
import { messages, meta, name } from './meta';
import { fixOption, FixProps, severityOption, SeverityProps } from '../../utils/types';
import { physicalProperties, PhysicalProperty } from '../../utils/physical';
import {
  isPhysicalProperty,
  physicalToLogicalPropertyMap,
  vendorPrefixes,
} from './utils';

const { report, validateOptions } = stylelint.utils;

interface SecondaryOptions extends FixProps, SeverityProps {
  ignore?: PhysicalProperty[];
}

export const requireLogicalProperties: Rule = (
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
                Object.values(physicalProperties).includes(value as PhysicalProperty)
              );
            },
          ],
        },
      },
    );

    if (!validOptions) return;

    const { ignore, severity = 'error' } = secondaryOptions;

    root.walkDecls((decl) => {
      const rawProperty = decl.prop;
      let sanitizedProperty = rawProperty.toLowerCase();

      vendorPrefixes.forEach((prefix: string) => {
        sanitizedProperty = sanitizedProperty.replace(prefix, '');
      });

      const isPropertyPhysical = isPhysicalProperty(sanitizedProperty);
      const logicalPropertyEquivalent =
        physicalToLogicalPropertyMap[sanitizedProperty as PhysicalProperty];

      if (!isPropertyPhysical || !logicalPropertyEquivalent) return;

      const isPropertyIgnored =
        Array.isArray(ignore) &&
        (ignore.includes(sanitizedProperty as PhysicalProperty) ||
          ignore?.includes(rawProperty as PhysicalProperty));

      if (isPropertyIgnored) return;

      report({
        fix: () => {
          decl.prop = decl.prop.replace(sanitizedProperty, logicalPropertyEquivalent);
        },
        message: messages.error(rawProperty, logicalPropertyEquivalent),
        node: decl,
        result,
        ruleName: name,
        severity,
      });
    });
  };
};

requireLogicalProperties.ruleName = name;
requireLogicalProperties.messages = messages;
requireLogicalProperties.meta = meta;
