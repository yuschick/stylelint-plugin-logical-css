import stylelint from 'stylelint';
import * as meta from './meta';
import { requireLogicalUnits } from './rule';

export default stylelint.createPlugin(meta.name, requireLogicalUnits);
