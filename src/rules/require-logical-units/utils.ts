import { LogicalUnit } from '../../utils/logical';
import { PhysicalUnit, physicalUnits } from '../../utils/physical';

export const physicalToLogicalUnitMap: Record<PhysicalUnit, LogicalUnit> = {
  cqh: 'cqb',
  cqw: 'cqi',
  dvh: 'dvb',
  dvw: 'dvi',
  lvh: 'lvb',
  lvw: 'lvi',
  svh: 'svb',
  svw: 'svi',
  vh: 'vb',
  vw: 'vi',
};

const expression = new RegExp(
  `\\b\\d+(\\.\\d+)?\\s*(${Object.keys(physicalUnits).join('|')})\\b`,
  'g',
);

export function getValueUnit(value: string): PhysicalUnit[] | false {
  const match = value.match(expression);

  if (!match) return false;

  const matches = Array.isArray(match) ? match : [match];

  const matchedUnit = matches.map(
    (match) => physicalUnits[match.replace(/[0-9](\.[0-9])?/g, '') as PhysicalUnit],
  );

  return matchedUnit;
}

export function isPhysicalUnit(value: string): boolean {
  const units = getValueUnit(value);

  if (!units) return false;

  const unitIsPhysical = Object.values(physicalUnits).some((unit) =>
    units.find((match) => match.includes(unit)),
  );

  return unitIsPhysical;
}
