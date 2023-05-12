const { physicalUnits } = require('./physical');

const expression = /(\d+\s?)(cqh|cqw|dvh|dvw|lvh|lvw|svh|svw|vh|vw|)(\s+|$)/;

function getValueUnit(value) {
  const match = value.match(expression);

  if (!match) return false;

  const matchedUnit = match.find((item) =>
    Object.values(physicalUnits).includes(item),
  );

  return matchedUnit;
}

function isPhysicalUnit(value) {
  const unit = getValueUnit(value);

  if (!unit) return false;

  const unitIsPhysical = Object.values(physicalUnits).includes(unit);

  return unitIsPhysical;
}

module.exports = {
  getValueUnit,
  isPhysicalUnit,
};
