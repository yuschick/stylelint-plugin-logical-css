import { logicalUnits } from './logical.js';
import { physicalUnits } from './physical.js';

export const physicalUnitsMap = Object.freeze({
  [physicalUnits.cqh]: logicalUnits.cqb,
  [physicalUnits.cqw]: logicalUnits.cqi,
  [physicalUnits.dvh]: logicalUnits.dvb,
  [physicalUnits.dvw]: logicalUnits.dvi,
  [physicalUnits.lvh]: logicalUnits.lvb,
  [physicalUnits.lvw]: logicalUnits.lvi,
  [physicalUnits.svh]: logicalUnits.svb,
  [physicalUnits.svw]: logicalUnits.svi,
  [physicalUnits.vh]: logicalUnits.vb,
  [physicalUnits.vw]: logicalUnits.vi,
});
