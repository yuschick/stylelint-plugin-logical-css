export type PhysicalAxis = 'horizontal' | 'vertical' | 'x' | 'y';
export type PhysicalValue = 'bottom' | 'left' | 'right' | 'top';
export type PhysicalUnit =
  | 'cqh'
  | 'cqw'
  | 'dvh'
  | 'dvw'
  | 'lvh'
  | 'lvw'
  | 'svh'
  | 'svw'
  | 'vh'
  | 'vw';

export const physicalAxis: Record<PhysicalAxis, PhysicalAxis> = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  x: 'x',
  y: 'y',
};

export type PhysicalPropertyCamelCase =
  | 'borderBottom'
  | 'borderBottomColor'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderBottomStyle'
  | 'borderBottomWidth'
  | 'borderLeft'
  | 'borderLeftColor'
  | 'borderLeftStyle'
  | 'borderLeftWidth'
  | 'borderRight'
  | 'borderRightColor'
  | 'borderRightStyle'
  | 'borderRightWidth'
  | 'borderTop'
  | 'borderTopColor'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderTopStyle'
  | 'borderTopWidth'
  | 'bottom'
  | 'boxOrient'
  | 'captionSide'
  | 'clear'
  | 'containIntrinsicHeight'
  | 'containIntrinsicWidth'
  | 'float'
  | 'height'
  | 'left'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'overflowX'
  | 'overflowY'
  | 'overscrollBehaviorX'
  | 'overscrollBehaviorY'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'resize'
  | 'right'
  | 'scrollMarginBottom'
  | 'scrollMarginLeft'
  | 'scrollMarginRight'
  | 'scrollMarginTop'
  | 'scrollPaddingBottom'
  | 'scrollPaddingLeft'
  | 'scrollPaddingRight'
  | 'scrollPaddingTop'
  | 'textAlign'
  | 'top'
  | 'width';

export type PhysicalPropertyKebabCase =
  | 'border-bottom'
  | 'border-bottom-color'
  | 'border-bottom-left-radius'
  | 'border-bottom-right-radius'
  | 'border-bottom-style'
  | 'border-bottom-width'
  | 'border-left'
  | 'border-left-color'
  | 'border-left-style'
  | 'border-left-width'
  | 'border-right'
  | 'border-right-color'
  | 'border-right-style'
  | 'border-right-width'
  | 'border-top'
  | 'border-top-color'
  | 'border-top-left-radius'
  | 'border-top-right-radius'
  | 'border-top-style'
  | 'border-top-width'
  | 'bottom'
  | 'box-orient'
  | 'caption-side'
  | 'clear'
  | 'contain-intrinsic-height'
  | 'contain-intrinsic-width'
  | 'float'
  | 'height'
  | 'left'
  | 'margin-bottom'
  | 'margin-left'
  | 'margin-right'
  | 'margin-top'
  | 'max-height'
  | 'max-width'
  | 'min-height'
  | 'min-width'
  | 'overflow-x'
  | 'overflow-y'
  | 'overscroll-behavior-x'
  | 'overscroll-behavior-y'
  | 'padding-bottom'
  | 'padding-left'
  | 'padding-right'
  | 'padding-top'
  | 'resize'
  | 'right'
  | 'scroll-margin-bottom'
  | 'scroll-margin-left'
  | 'scroll-margin-right'
  | 'scroll-margin-top'
  | 'scroll-padding-bottom'
  | 'scroll-padding-left'
  | 'scroll-padding-right'
  | 'scroll-padding-top'
  | 'text-align'
  | 'top'
  | 'width';

export const physicalProperties: Record<
  PhysicalPropertyCamelCase,
  PhysicalPropertyKebabCase
> = {
  borderBottom: 'border-bottom',
  borderBottomColor: 'border-bottom-color',
  borderBottomLeftRadius: 'border-bottom-left-radius',
  borderBottomRightRadius: 'border-bottom-right-radius',
  borderBottomStyle: 'border-bottom-style',
  borderBottomWidth: 'border-bottom-width',
  borderLeft: 'border-left',
  borderLeftColor: 'border-left-color',
  borderLeftStyle: 'border-left-style',
  borderLeftWidth: 'border-left-width',
  borderRight: 'border-right',
  borderRightColor: 'border-right-color',
  borderRightStyle: 'border-right-style',
  borderRightWidth: 'border-right-width',
  borderTop: 'border-top',
  borderTopColor: 'border-top-color',
  borderTopLeftRadius: 'border-top-left-radius',
  borderTopRightRadius: 'border-top-right-radius',
  borderTopStyle: 'border-top-style',
  borderTopWidth: 'border-top-width',
  bottom: 'bottom',
  boxOrient: 'box-orient',
  captionSide: 'caption-side',
  clear: 'clear',
  containIntrinsicHeight: 'contain-intrinsic-height',
  containIntrinsicWidth: 'contain-intrinsic-width',
  float: 'float',
  height: 'height',
  left: 'left',
  marginBottom: 'margin-bottom',
  marginLeft: 'margin-left',
  marginRight: 'margin-right',
  marginTop: 'margin-top',
  maxHeight: 'max-height',
  maxWidth: 'max-width',
  minHeight: 'min-height',
  minWidth: 'min-width',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
  overscrollBehaviorX: 'overscroll-behavior-x',
  overscrollBehaviorY: 'overscroll-behavior-y',
  paddingBottom: 'padding-bottom',
  paddingLeft: 'padding-left',
  paddingRight: 'padding-right',
  paddingTop: 'padding-top',
  resize: 'resize',
  right: 'right',
  scrollMarginBottom: 'scroll-margin-bottom',
  scrollMarginLeft: 'scroll-margin-left',
  scrollMarginRight: 'scroll-margin-right',
  scrollMarginTop: 'scroll-margin-top',
  scrollPaddingBottom: 'scroll-padding-bottom',
  scrollPaddingLeft: 'scroll-padding-left',
  scrollPaddingRight: 'scroll-padding-right',
  scrollPaddingTop: 'scroll-padding-top',
  textAlign: 'text-align',
  top: 'top',
  width: 'width',
};

export const physicalUnits: Record<PhysicalUnit, PhysicalUnit> = {
  cqh: 'cqh',
  cqw: 'cqw',
  dvh: 'dvh',
  dvw: 'dvw',
  lvh: 'lvh',
  lvw: 'lvw',
  svh: 'svh',
  svw: 'svw',
  vh: 'vh',
  vw: 'vw',
};

export const physicalValues: Record<PhysicalValue, PhysicalValue> = {
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  top: 'top',
};
