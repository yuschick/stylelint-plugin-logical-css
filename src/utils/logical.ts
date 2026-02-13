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

export type LogicalValueCamelCase =
  | 'blockEnd'
  | 'blockStart'
  | 'inlineEnd'
  | 'inlineStart';
export type LogicalValueKebabCase =
  | 'block-end'
  | 'block-start'
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

export type LogicalPropertyCamelCase =
  | 'blockSize'
  | 'borderBlock'
  | 'borderBlockColor'
  | 'borderBlockEnd'
  | 'borderBlockEndColor'
  | 'borderBlockEndStyle'
  | 'borderBlockEndWidth'
  | 'borderBlockStart'
  | 'borderBlockStartColor'
  | 'borderBlockStartStyle'
  | 'borderBlockStartWidth'
  | 'borderBlockStyle'
  | 'borderBlockWidth'
  | 'borderColor'
  | 'borderEndEndRadius'
  | 'borderEndStartRadius'
  | 'borderInline'
  | 'borderInlineColor'
  | 'borderInlineEnd'
  | 'borderInlineEndColor'
  | 'borderInlineEndStyle'
  | 'borderInlineEndWidth'
  | 'borderInlineStart'
  | 'borderInlineStartColor'
  | 'borderInlineStartStyle'
  | 'borderInlineStartWidth'
  | 'borderInlineStyle'
  | 'borderInlineWidth'
  | 'borderStartEndRadius'
  | 'borderStartStartRadius'
  | 'borderStyle'
  | 'borderWidth'
  | 'containIntrinsicBlockSize'
  | 'containIntrinsicInlineSize'
  | 'inlineSize'
  | 'insetBlock'
  | 'insetBlockEnd'
  | 'insetBlockStart'
  | 'insetInline'
  | 'insetInlineEnd'
  | 'insetInlineStart'
  | 'marginBlock'
  | 'marginBlockEnd'
  | 'marginBlockStart'
  | 'marginInline'
  | 'marginInlineEnd'
  | 'marginInlineStart'
  | 'maxBlockSize'
  | 'maxInlineSize'
  | 'minBlockSize'
  | 'minInlineSize'
  | 'overflowBlock'
  | 'overflowInline'
  | 'overscrollBehaviorBlock'
  | 'overscrollBehaviorInline'
  | 'paddingBlock'
  | 'paddingBlockEnd'
  | 'paddingBlockStart'
  | 'paddingInline'
  | 'paddingInlineEnd'
  | 'paddingInlineStart'
  | 'scrollMarginBlock'
  | 'scrollMarginBlockEnd'
  | 'scrollMarginBlockStart'
  | 'scrollMarginInline'
  | 'scrollMarginInlineEnd'
  | 'scrollMarginInlineStart'
  | 'scrollPaddingBlock'
  | 'scrollPaddingBlockEnd'
  | 'scrollPaddingBlockStart'
  | 'scrollPaddingInline'
  | 'scrollPaddingInlineEnd'
  | 'scrollPaddingInlineStart';

export type LogicalPropertyKebabCase =
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

export const logicalProperties: Record<
  LogicalPropertyCamelCase,
  LogicalPropertyKebabCase
> = {
  blockSize: 'block-size',
  borderBlock: 'border-block',
  borderBlockColor: 'border-block-color',
  borderBlockEnd: 'border-block-end',
  borderBlockEndColor: 'border-block-end-color',
  borderBlockEndStyle: 'border-block-end-style',
  borderBlockEndWidth: 'border-block-end-width',
  borderBlockStart: 'border-block-start',
  borderBlockStartColor: 'border-block-start-color',
  borderBlockStartStyle: 'border-block-start-style',
  borderBlockStartWidth: 'border-block-start-width',
  borderBlockStyle: 'border-block-style',
  borderBlockWidth: 'border-block-width',
  borderColor: 'border-color',
  borderEndEndRadius: 'border-end-end-radius',
  borderEndStartRadius: 'border-end-start-radius',
  borderInline: 'border-inline',
  borderInlineColor: 'border-inline-color',
  borderInlineEnd: 'border-inline-end',
  borderInlineEndColor: 'border-inline-end-color',
  borderInlineEndStyle: 'border-inline-end-style',
  borderInlineEndWidth: 'border-inline-end-width',
  borderInlineStart: 'border-inline-start',
  borderInlineStartColor: 'border-inline-start-color',
  borderInlineStartStyle: 'border-inline-start-style',
  borderInlineStartWidth: 'border-inline-start-width',
  borderInlineStyle: 'border-inline-style',
  borderInlineWidth: 'border-inline-width',
  borderStartEndRadius: 'border-start-end-radius',
  borderStartStartRadius: 'border-start-start-radius',
  borderStyle: 'border-style',
  borderWidth: 'border-width',
  containIntrinsicBlockSize: 'contain-intrinsic-block-size',
  containIntrinsicInlineSize: 'contain-intrinsic-inline-size',
  inlineSize: 'inline-size',
  insetBlock: 'inset-block',
  insetBlockEnd: 'inset-block-end',
  insetBlockStart: 'inset-block-start',
  insetInline: 'inset-inline',
  insetInlineEnd: 'inset-inline-end',
  insetInlineStart: 'inset-inline-start',
  marginBlock: 'margin-block',
  marginBlockEnd: 'margin-block-end',
  marginBlockStart: 'margin-block-start',
  marginInline: 'margin-inline',
  marginInlineEnd: 'margin-inline-end',
  marginInlineStart: 'margin-inline-start',
  maxBlockSize: 'max-block-size',
  maxInlineSize: 'max-inline-size',
  minBlockSize: 'min-block-size',
  minInlineSize: 'min-inline-size',
  overflowBlock: 'overflow-block',
  overflowInline: 'overflow-inline',
  overscrollBehaviorBlock: 'overscroll-behavior-block',
  overscrollBehaviorInline: 'overscroll-behavior-inline',
  paddingBlock: 'padding-block',
  paddingBlockEnd: 'padding-block-end',
  paddingBlockStart: 'padding-block-start',
  paddingInline: 'padding-inline',
  paddingInlineEnd: 'padding-inline-end',
  paddingInlineStart: 'padding-inline-start',
  scrollMarginBlock: 'scroll-margin-block',
  scrollMarginBlockEnd: 'scroll-margin-block-end',
  scrollMarginBlockStart: 'scroll-margin-block-start',
  scrollMarginInline: 'scroll-margin-inline',
  scrollMarginInlineEnd: 'scroll-margin-inline-end',
  scrollMarginInlineStart: 'scroll-margin-inline-start',
  scrollPaddingBlock: 'scroll-padding-block',
  scrollPaddingBlockEnd: 'scroll-padding-block-end',
  scrollPaddingBlockStart: 'scroll-padding-block-start',
  scrollPaddingInline: 'scroll-padding-inline',
  scrollPaddingInlineEnd: 'scroll-padding-inline-end',
  scrollPaddingInlineStart: 'scroll-padding-inline-start',
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

export const logicalValues: Record<LogicalValueCamelCase, LogicalValueKebabCase> = {
  blockEnd: 'block-end',
  blockStart: 'block-start',
  inlineEnd: 'inline-end',
  inlineStart: 'inline-start',
};
