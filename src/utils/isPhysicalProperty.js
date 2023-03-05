const { physicalPropertiesMap } = require('./physicalPropertiesMap');

function isPhysicalProperty(property) {
  const physicalProperties = Object.keys(physicalPropertiesMap);

  const propIsPhysical = physicalProperties.includes(property);

  return propIsPhysical;
}

module.exports = {
  isPhysicalProperty,
};
