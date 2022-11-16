/*
 * @Author: xiangshangzhi
 * @Date: 2022-11-15 19:36:14
 * @FilePath: /dumi_test/src/Button/index.tsx
 */
import React from 'react';

import './style.less';

export default ({ title }: { title: string }) => {
  return (
    <div className="xsz">
      <button>{title}</button>
    </div>
  );
};
