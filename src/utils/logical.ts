export type LogicalAxis = 'block' | 'inline';
export type LogicalAxisPoint = 'end' | 'start';
export type LogicalUnit =
  | 'cqb'
  | 'cqi'
  | 'dvb'
  | 'dvi'
  | 'lvb'
  | 'lvi'
  | 'svb'
  | 'svi'
  | 'vb'
  | 'vi';

export type LogicalValue =
  | 'block'
  | 'block-end'
  | 'block-start'
  | 'inline'
  | 'inline-end'
  | 'inline-start';

export const logicalAxis: Record<LogicalAxis, LogicalAxis> = Object.freeze({
  block: 'block',
  inline: 'inline',
});

export const logicalInlinePoints: Record<LogicalAxisPoint, LogicalAxisPoint> =
  Object.freeze({
    end: 'end',
    start: 'start',
  });

export type LogicalProperty =
  | 'block-size'
  | 'border-block'
  | 'border-block-color'
  | 'border-block-end'
  | 'border-block-end-color'
  | 'border-block-end-style'
  | 'border-block-end-width'
  | 'border-block-start'
  | 'border-block-start-color'
  | 'border-block-start-style'
  | 'border-block-start-width'
  | 'border-block-style'
  | 'border-block-width'
  | 'border-color'
  | 'border-end-end-radius'
  | 'border-end-start-radius'
  | 'border-inline'
  | 'border-inline-color'
  | 'border-inline-end'
  | 'border-inline-end-color'
  | 'border-inline-end-style'
  | 'border-inline-end-width'
  | 'border-inline-start'
  | 'border-inline-start-color'
  | 'border-inline-start-style'
  | 'border-inline-start-width'
  | 'border-inline-style'
  | 'border-inline-width'
  | 'border-start-end-radius'
  | 'border-start-start-radius'
  | 'border-style'
  | 'border-width'
  | 'contain-intrinsic-block-size'
  | 'contain-intrinsic-inline-size'
  | 'inline-size'
  | 'inset-block'
  | 'inset-block-end'
  | 'inset-block-start'
  | 'inset-inline'
  | 'inset-inline-end'
  | 'inset-inline-start'
  | 'margin-block'
  | 'margin-block-end'
  | 'margin-block-start'
  | 'margin-inline'
  | 'margin-inline-end'
  | 'margin-inline-start'
  | 'max-block-size'
  | 'max-inline-size'
  | 'min-block-size'
  | 'min-inline-size'
  | 'overflow-block'
  | 'overflow-inline'
  | 'overscroll-behavior-block'
  | 'overscroll-behavior-inline'
  | 'padding-block'
  | 'padding-block-end'
  | 'padding-block-start'
  | 'padding-inline'
  | 'padding-inline-end'
  | 'padding-inline-start'
  | 'scroll-margin-block'
  | 'scroll-margin-block-end'
  | 'scroll-margin-block-start'
  | 'scroll-margin-inline'
  | 'scroll-margin-inline-end'
  | 'scroll-margin-inline-start'
  | 'scroll-padding-block'
  | 'scroll-padding-block-end'
  | 'scroll-padding-block-start'
  | 'scroll-padding-inline'
  | 'scroll-padding-inline-end'
  | 'scroll-padding-inline-start';

export const logicalProperties: Record<LogicalProperty, LogicalProperty> = {
  'block-size': 'block-size',
  'border-block': 'border-block',
  'border-block-color': 'border-block-color',
  'border-block-end': 'border-block-end',
  'border-block-end-color': 'border-block-end-color',
  'border-block-end-style': 'border-block-end-style',
  'border-block-end-width': 'border-block-end-width',
  'border-block-start': 'border-block-start',
  'border-block-start-color': 'border-block-start-color',
  'border-block-start-style': 'border-block-start-style',
  'border-block-start-width': 'border-block-start-width',
  'border-block-style': 'border-block-style',
  'border-block-width': 'border-block-width',
  'border-color': 'border-color',
  'border-end-end-radius': 'border-end-end-radius',
  'border-end-start-radius': 'border-end-start-radius',
  'border-inline': 'border-inline',
  'border-inline-color': 'border-inline-color',
  'border-inline-end': 'border-inline-end',
  'border-inline-end-color': 'border-inline-end-color',
  'border-inline-end-style': 'border-inline-end-style',
  'border-inline-end-width': 'border-inline-end-width',
  'border-inline-start': 'border-inline-start',
  'border-inline-start-color': 'border-inline-start-color',
  'border-inline-start-style': 'border-inline-start-style',
  'border-inline-start-width': 'border-inline-start-width',
  'border-inline-style': 'border-inline-style',
  'border-inline-width': 'border-inline-width',
  'border-start-end-radius': 'border-start-end-radius',
  'border-start-start-radius': 'border-start-start-radius',
  'border-style': 'border-style',
  'border-width': 'border-width',
  'contain-intrinsic-block-size': 'contain-intrinsic-block-size',
  'contain-intrinsic-inline-size': 'contain-intrinsic-inline-size',
  'inline-size': 'inline-size',
  'inset-block': 'inset-block',
  'inset-block-end': 'inset-block-end',
  'inset-block-start': 'inset-block-start',
  'inset-inline': 'inset-inline',
  'inset-inline-end': 'inset-inline-end',
  'inset-inline-start': 'inset-inline-start',
  'margin-block': 'margin-block',
  'margin-block-end': 'margin-block-end',
  'margin-block-start': 'margin-block-start',
  'margin-inline': 'margin-inline',
  'margin-inline-end': 'margin-inline-end',
  'margin-inline-start': 'margin-inline-start',
  'max-block-size': 'max-block-size',
  'max-inline-size': 'max-inline-size',
  'min-block-size': 'min-block-size',
  'min-inline-size': 'min-inline-size',
  'overflow-block': 'overflow-block',
  'overflow-inline': 'overflow-inline',
  'overscroll-behavior-block': 'overscroll-behavior-block',
  'overscroll-behavior-inline': 'overscroll-behavior-inline',
  'padding-block': 'padding-block',
  'padding-block-end': 'padding-block-end',
  'padding-block-start': 'padding-block-start',
  'padding-inline': 'padding-inline',
  'padding-inline-end': 'padding-inline-end',
  'padding-inline-start': 'padding-inline-start',
  'scroll-margin-block': 'scroll-margin-block',
  'scroll-margin-block-end': 'scroll-margin-block-end',
  'scroll-margin-block-start': 'scroll-margin-block-start',
  'scroll-margin-inline': 'scroll-margin-inline',
  'scroll-margin-inline-end': 'scroll-margin-inline-end',
  'scroll-margin-inline-start': 'scroll-margin-inline-start',
  'scroll-padding-block': 'scroll-padding-block',
  'scroll-padding-block-end': 'scroll-padding-block-end',
  'scroll-padding-block-start': 'scroll-padding-block-start',
  'scroll-padding-inline': 'scroll-padding-inline',
  'scroll-padding-inline-end': 'scroll-padding-inline-end',
  'scroll-padding-inline-start': 'scroll-padding-inline-start',
};

export const logicalUnits: Record<LogicalUnit, LogicalUnit> = {
  cqb: 'cqb',
  cqi: 'cqi',
  dvb: 'dvb',
  dvi: 'dvi',
  lvb: 'lvb',
  lvi: 'lvi',
  svb: 'svb',
  svi: 'svi',
  vb: 'vb',
  vi: 'vi',
};

export const logicalValues: Record<LogicalValue, LogicalValue> = {
  block: 'block',
  'block-end': 'block-end',
  'block-start': 'block-start',
  inline: 'inline',
  'inline-end': 'inline-end',
  'inline-start': 'inline-start',
};
