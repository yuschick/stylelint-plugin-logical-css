const { logicalProperties } = require('./logical');
const { physicalProperties } = require('./physical');

const physicalPropertiesMap = Object.freeze({
  [physicalProperties.borderBottom]: logicalProperties.borderBlockEnd,
  [physicalProperties.borderBottomColor]: logicalProperties.borderBlockEndColor,
  [physicalProperties.borderBottomLeftRadius]:
    logicalProperties.borderEndStartRadius,
  [physicalProperties.borderBottomRightRadius]:
    logicalProperties.borderEndEndRadius,
  [physicalProperties.borderBottomStyle]: logicalProperties.borderBlockEndStyle,
  [physicalProperties.borderBottomWidth]: logicalProperties.borderBlockEndWidth,
  [physicalProperties.borderLeft]: logicalProperties.borderInlineStart,
  [physicalProperties.borderLeftColor]:
    logicalProperties.borderInlineStartColor,
  [physicalProperties.borderLeftStyle]:
    logicalProperties.borderInlineStartStyle,
  [physicalProperties.borderLeftWidth]:
    logicalProperties.borderInlineStartWidth,
  [physicalProperties.borderRight]: logicalProperties.borderInlineEnd,
  [physicalProperties.borderRightColor]: logicalProperties.borderInlineEndColor,
  [physicalProperties.borderRightStyle]: logicalProperties.borderInlineEndStyle,
  [physicalProperties.borderRightWidth]: logicalProperties.borderInlineEndWidth,
  [physicalProperties.borderTop]: logicalProperties.borderBlockStart,
  [physicalProperties.borderTopColor]: logicalProperties.borderBlockStartColor,
  [physicalProperties.borderTopLeftRadius]:
    logicalProperties.borderStartStartRadius,
  [physicalProperties.borderTopRightRadius]:
    logicalProperties.borderStartEndRadius,
  [physicalProperties.borderTopStyle]: logicalProperties.borderBlockStartStyle,
  [physicalProperties.borderTopWidth]: logicalProperties.borderBlockStartWidth,
  [physicalProperties.bottom]: logicalProperties.insetBlockEnd,
  [physicalProperties.containIntrinsicHeight]:
    logicalProperties.containIntrinsicBlockSize,
  [physicalProperties.containIntrinsicWidth]:
    logicalProperties.containIntrinsicInlineSize,
  [physicalProperties.height]: logicalProperties.blockSize,
  [physicalProperties.left]: logicalProperties.insetInlineStart,
  [physicalProperties.marginBottom]: logicalProperties.marginBlockEnd,
  [physicalProperties.marginLeft]: logicalProperties.marginInlineStart,
  [physicalProperties.marginRight]: logicalProperties.marginInlineEnd,
  [physicalProperties.marginTop]: logicalProperties.marginBlockStart,
  [physicalProperties.maxHeight]: logicalProperties.maxBlockSize,
  [physicalProperties.maxWidth]: logicalProperties.maxInlineSize,
  [physicalProperties.minHeight]: logicalProperties.minBlockSize,
  [physicalProperties.minWidth]: logicalProperties.minInlineSize,
  [physicalProperties.overflowX]: logicalProperties.overflowInline,
  [physicalProperties.overflowY]: logicalProperties.overflowBlock,
  [physicalProperties.overscrollBehaviorX]:
    logicalProperties.overscrollBehaviorInline,
  [physicalProperties.overscrollBehaviorY]:
    logicalProperties.overscrollBehaviorBlock,
  [physicalProperties.paddingBottom]: logicalProperties.paddingBlockEnd,
  [physicalProperties.paddingLeft]: logicalProperties.paddingInlineStart,
  [physicalProperties.paddingRight]: logicalProperties.paddingInlineEnd,
  [physicalProperties.paddingTop]: logicalProperties.paddingBlockStart,
  [physicalProperties.scrollMarginBottom]:
    logicalProperties.scrollMarginBlockEnd,
  [physicalProperties.scrollMarginLeft]:
    logicalProperties.scrollMarginInlineStart,
  [physicalProperties.scrollMarginRight]:
    logicalProperties.scrollMarginInlineEnd,
  [physicalProperties.scrollMarginTop]:
    logicalProperties.scrollMarginBlockStart,
  [physicalProperties.scrollPaddingBottom]:
    logicalProperties.scrollPaddingBlockEnd,
  [physicalProperties.scrollPaddingLeft]:
    logicalProperties.scrollPaddingInlineStart,
  [physicalProperties.scrollPaddingRight]:
    logicalProperties.scrollPaddingInlineEnd,
  [physicalProperties.scrollPaddingTop]:
    logicalProperties.scrollPaddingBlockStart,
  [physicalProperties.right]: logicalProperties.insetInlineEnd,
  [physicalProperties.top]: logicalProperties.insetBlockStart,
  [physicalProperties.width]: logicalProperties.inlineSize,
});

module.exports = {
  physicalPropertiesMap,
};
