import stylelint from 'stylelint';
import * as meta from './meta';
import { requireLogicalKeywords } from './rule';

export default stylelint.createPlugin(meta.name, requireLogicalKeywords);
