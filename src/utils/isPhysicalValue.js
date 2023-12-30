import { physicalAxis, physicalValues } from './physical.js';

export function isPhysicalValue(value) {
  const values = [
    ...Object.values(physicalValues),
    ...Object.values(physicalAxis),
  ];

  const valueIsPhysical = values.some((direction) => value === direction);

  return valueIsPhysical;
}
