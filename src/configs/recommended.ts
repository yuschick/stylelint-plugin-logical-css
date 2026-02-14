export default {
  plugins: ['stylelint-plugin-logical-css'],
  rules: {
    'logical-css/require-logical-keywords': [
      true,
      { ignore: ['caption-side', 'offset-anchor', 'offset-position'], severity: 'error' },
    ],
    'logical-css/require-logical-properties': [true, { severity: 'error' }],
    'logical-css/require-logical-units': [true, { severity: 'error' }],
  },
};
