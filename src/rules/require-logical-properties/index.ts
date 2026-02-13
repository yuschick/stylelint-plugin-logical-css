import stylelint from 'stylelint';
import * as meta from './meta';
import { requireLogicalProperties } from './rule';

export default stylelint.createPlugin(meta.name, requireLogicalProperties);
