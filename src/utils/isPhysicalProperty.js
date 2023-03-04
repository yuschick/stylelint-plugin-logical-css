const { physicalAxis, physicalValues } = require("./physical");

function isPhysicalProperty(property) {
  const physicalDirections = Object.values(physicalValues);
  const physicalAxes = Object.values(physicalAxis);

  const propIsPhysical =
    physicalDirections.some((direction) => property.includes(direction)) ||
    physicalAxes.some((direction) => property.includes(`-${direction}`));

  return propIsPhysical;
}

module.exports = {
  isPhysicalProperty,
};
