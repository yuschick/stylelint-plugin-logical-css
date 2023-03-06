/*
    The properties included in this array can contain physical values like left and bottom.
    However, logical values for the4se properties are not yet supported. So for the time being,
    we skip linting them entirely.
*/
const propsToSkip = [
  'background',
  'background-position',
  'background-position-x',
  'background-position-y',
  'grid-area',
  'grid-template-areas',
  '-webkit-mask-position',
  'mask-position',
  'transform-origin',
  'vertical-align',
];

module.exports = {
  propsToSkip,
};
