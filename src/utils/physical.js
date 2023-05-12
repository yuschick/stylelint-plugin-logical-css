const physicalAxis = Object.freeze({
  horizontal: 'horizontal',
  vertical: 'vertical',
  x: 'x',
  y: 'y',
});

const physicalProperties = Object.freeze({
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
  boxOrient: 'box-orient',
  bottom: 'bottom',
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
});

const physicalUnits = Object.freeze({
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
});

const physicalValues = Object.freeze({
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  top: 'top',
});

module.exports = {
  physicalAxis,
  physicalProperties,
  physicalUnits,
  physicalValues,
};
