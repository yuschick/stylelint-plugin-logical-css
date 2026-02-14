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

export type PhysicalProperty =
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
  | 'contain-intrinsic-height'
  | 'contain-intrinsic-width'
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
  | 'right'
  | 'scroll-margin-bottom'
  | 'scroll-margin-left'
  | 'scroll-margin-right'
  | 'scroll-margin-top'
  | 'scroll-padding-bottom'
  | 'scroll-padding-left'
  | 'scroll-padding-right'
  | 'scroll-padding-top'
  | 'top'
  | 'width';

export const physicalProperties: Record<PhysicalProperty, PhysicalProperty> = {
  'border-bottom': 'border-bottom',
  'border-bottom-color': 'border-bottom-color',
  'border-bottom-left-radius': 'border-bottom-left-radius',
  'border-bottom-right-radius': 'border-bottom-right-radius',
  'border-bottom-style': 'border-bottom-style',
  'border-bottom-width': 'border-bottom-width',
  'border-left': 'border-left',
  'border-left-color': 'border-left-color',
  'border-left-style': 'border-left-style',
  'border-left-width': 'border-left-width',
  'border-right': 'border-right',
  'border-right-color': 'border-right-color',
  'border-right-style': 'border-right-style',
  'border-right-width': 'border-right-width',
  'border-top': 'border-top',
  'border-top-color': 'border-top-color',
  'border-top-left-radius': 'border-top-left-radius',
  'border-top-right-radius': 'border-top-right-radius',
  'border-top-style': 'border-top-style',
  'border-top-width': 'border-top-width',
  bottom: 'bottom',
  'contain-intrinsic-height': 'contain-intrinsic-height',
  'contain-intrinsic-width': 'contain-intrinsic-width',
  height: 'height',
  left: 'left',
  'margin-bottom': 'margin-bottom',
  'margin-left': 'margin-left',
  'margin-right': 'margin-right',
  'margin-top': 'margin-top',
  'max-height': 'max-height',
  'max-width': 'max-width',
  'min-height': 'min-height',
  'min-width': 'min-width',
  'overflow-x': 'overflow-x',
  'overflow-y': 'overflow-y',
  'overscroll-behavior-x': 'overscroll-behavior-x',
  'overscroll-behavior-y': 'overscroll-behavior-y',
  'padding-bottom': 'padding-bottom',
  'padding-left': 'padding-left',
  'padding-right': 'padding-right',
  'padding-top': 'padding-top',
  right: 'right',
  'scroll-margin-bottom': 'scroll-margin-bottom',
  'scroll-margin-left': 'scroll-margin-left',
  'scroll-margin-right': 'scroll-margin-right',
  'scroll-margin-top': 'scroll-margin-top',
  'scroll-padding-bottom': 'scroll-padding-bottom',
  'scroll-padding-left': 'scroll-padding-left',
  'scroll-padding-right': 'scroll-padding-right',
  'scroll-padding-top': 'scroll-padding-top',
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
