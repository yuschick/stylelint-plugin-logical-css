import { LogicalAxis, LogicalAxisPoint, LogicalValue } from '../../utils/logical';
import {
  physicalAxis,
  PhysicalAxis,
  PhysicalValue,
  physicalValues,
} from '../../utils/physical';

export const physicalKeywordProperties = [
  'box-orient',
  'caption-side',
  'clear',
  'float',
  'offset-anchor',
  'offset-position',
  'resize',
  'text-align',
  'text-align-last',
] as const;

export type PhysicalKeywordProperty = (typeof physicalKeywordProperties)[number];
export type PhysicalKeyword = PhysicalAxis | PhysicalValue;

export const physicalToLogicalKeywordMap: Record<
  PhysicalKeywordProperty,
  Partial<
    Record<PhysicalKeyword, LogicalAxisPoint | LogicalValue | `${LogicalAxis}-axis`>
  >
> = {
  'box-orient': {
    horizontal: 'inline-axis',
    vertical: 'block-axis',
  },
  'caption-side': {
    bottom: 'block-end',
    left: 'inline-start',
    right: 'inline-end',
    top: 'block-start',
  },
  clear: {
    left: 'inline-start',
    right: 'inline-end',
  },
  float: {
    left: 'inline-start',
    right: 'inline-end',
  },
  'offset-anchor': {
    bottom: 'block-end',
    left: 'inline-start',
    right: 'inline-end',
    top: 'block-start',
  },
  'offset-position': {
    bottom: 'block-end',
    left: 'inline-start',
    right: 'inline-end',
    top: 'block-start',
  },
  resize: {
    horizontal: 'inline',
    vertical: 'block',
  },
  'text-align': {
    left: 'start',
    right: 'end',
  },
  'text-align-last': {
    left: 'start',
    right: 'end',
  },
};

export function getPhysicalKeywords(value: string): PhysicalKeyword[] {
  const completePhysicalKeywords = [
    ...Object.values(physicalAxis),
    ...Object.values(physicalValues),
  ];

  // Remove function calls (like var(), calc(), etc.) to avoid false positives
  const sanitizedValue = value.replace(/\b\w+\([^)]*\)/g, '');

  // Split by whitespace and commas, convert to lowercase
  const tokens = sanitizedValue.toLowerCase().split(/[\s,]+/);

  const foundPhysicalKeywords: PhysicalKeyword[] = [];

  for (const token of tokens) {
    const trimmedToken = token.trim();

    // Skip empty tokens
    if (!trimmedToken) continue;

    // Skip tokens with non-alphabetic characters (except hyphens)
    // This excludes lengths (10px), percentages (50%), quoted strings, etc.
    if (/[^a-z-]/.test(trimmedToken)) continue;

    // Check if token exactly matches a physical keyword
    if (completePhysicalKeywords.includes(trimmedToken as PhysicalKeyword)) {
      foundPhysicalKeywords.push(trimmedToken as PhysicalKeyword);
    }
  }

  return foundPhysicalKeywords;
}
