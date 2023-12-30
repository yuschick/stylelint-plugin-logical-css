import { physicalUnits } from './physical.js';

const expression = /(\d+\s?)(cqh|cqw|dvh|dvw|lvh|lvw|svh|svw|vh|vw|)(\s+|$)/;

export function getValueUnit(value) {
  const match = value.match(expression);

  if (!match) return false;

  const matchedUnit = match.find((item) =>
    Object.values(physicalUnits).includes(item),
  );

  return matchedUnit;
}

export function isPhysicalUnit(value) {
  const unit = getValueUnit(value);

  if (!unit) return false;

  const unitIsPhysical = Object.values(physicalUnits).includes(unit);

  return unitIsPhysical;
}
