import { physicalUnits } from './physical.js';

const expression = /\b\d+(\.\d+)?\s*(cqh|cqw|dvh|dvw|lvh|lvw|svh|svw|vh|vw)\b/g;

export function getValueUnit(value) {
  const match = value.match(expression);

  if (!match) return false;

  const matches = Array.isArray(match) ? match : [match];

  const matchedUnit = matches.map(
    (match) => physicalUnits[match.replace(/[0-9]/g, '')],
  );

  return matchedUnit;
}

export function isPhysicalUnit(value) {
  const units = getValueUnit(value);

  if (!units) return false;

  const unitIsPhysical = Object.values(physicalUnits).some((unit) =>
    units.find((match) => match.includes(unit)),
  );

  return unitIsPhysical;
}
