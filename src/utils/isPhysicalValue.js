const { physicalAxis, physicalValues } = require("./physical");

function isPhysicalValue(value) {
  const values = [
    ...Object.values(physicalValues),
    ...Object.values(physicalAxis),
  ];

  const valueIsPhysical = values.some((direction) => value.includes(direction));

  return valueIsPhysical;
}

module.exports = {
  isPhysicalValue,
};
