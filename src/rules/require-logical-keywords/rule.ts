/**
 * @author Daniel Yuschick
 * @fileoverview Require physical keywords to use their logical equivalent
 * @license MIT
 */

import stylelint, { Rule } from 'stylelint';
import { messages, meta, name } from './meta';
import { fixOption, FixProps, severityOption, SeverityProps } from '../../utils/types';
import {
  getPhysicalKeywords,
  PhysicalKeyword,
  physicalKeywordProperties,
  PhysicalKeywordProperty,
  physicalToLogicalKeywordMap,
} from './utils';

const { report, validateOptions } = stylelint.utils;

interface SecondaryOptions extends FixProps, SeverityProps {
  ignore?: PhysicalKeywordProperty[];
}

export const requireLogicalKeywords: Rule = (
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
                physicalKeywordProperties.includes(value as PhysicalKeywordProperty)
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

      if (!physicalKeywordProperties.includes(rawProperty as PhysicalKeywordProperty))
        return;

      const isPropertyIgnored =
        Array.isArray(ignore) && ignore.includes(rawProperty as PhysicalKeywordProperty);

      if (isPropertyIgnored) return;

      const rawValue = decl.value;

      const physicalKeywords = getPhysicalKeywords(rawValue);

      if (!physicalKeywords.length) return;

      const reportedKeywords = new Set();

      physicalKeywords.forEach((keyword) => {
        if (reportedKeywords.has(keyword)) return;

        reportedKeywords.add(keyword);

        const mapProperty =
          physicalToLogicalKeywordMap[rawProperty as PhysicalKeywordProperty];
        const logicalKeyword = mapProperty[keyword as PhysicalKeyword];

        if (!logicalKeyword) return;

        report({
          fix: () => {
            decl.value = decl.value.replace(
              new RegExp(`\\b${keyword}\\b`, 'gi'),
              logicalKeyword,
            );
          },
          message: messages.error(keyword, logicalKeyword),
          node: decl,
          result,
          ruleName: name,
          severity,
        });
      });
    });
  };
};

requireLogicalKeywords.ruleName = name;
requireLogicalKeywords.messages = messages;
requireLogicalKeywords.meta = meta;
