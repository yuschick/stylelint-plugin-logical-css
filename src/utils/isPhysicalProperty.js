import { physicalPropertiesMap } from './physicalPropertiesMap.js';

export function isPhysicalProperty(property) {
  const physicalProperties = Object.keys(physicalPropertiesMap);

  const propIsPhysical = physicalProperties.includes(property);

  return propIsPhysical;
}
