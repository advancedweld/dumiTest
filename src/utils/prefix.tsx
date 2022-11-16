/**
 * prefix
 */
export const prefixCls = 'xsz';
export const antdPrefixCls = 'ant4';

export const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
};
