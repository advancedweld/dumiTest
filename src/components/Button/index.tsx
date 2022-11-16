/*
 * @Author: xiangshangzhi
 * @Date: 2022-11-15 19:36:14
 * @FilePath: /dumi_test/src/components/Button/index.tsx
 */
import React from 'react';

import cx from 'classnames';

import { getPrefixCls } from '../../utils/prefix';
import './style.less';

const prefixCls = getPrefixCls('button');

interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size: 'large';
}
export default (props: IButtonProps) => {
  const { children, style, size } = props;

  const classnames = cx({
    [`${prefixCls}-lg`]: size === 'large',
  });
  return (
    <div className="xsz">
      <button className={classnames} style={{ ...style }}>
        {children}
      </button>
    </div>
  );
};
