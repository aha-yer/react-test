/*
 * @Author: yer
 * @Date: 2022-10-22 15:04:53
 * @LastEditors: yer
 * @LastEditTime: 2022-10-22 16:23:23
 * @FilePath: /react-test/src/test-component/deep-jsx.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */

/**
 * 1. 可以使用 点语法
 */
const DeepJsx = {
  DeepJsxComponent: function (props) {
    /**
     * 2. prop默认值为true
     */
    console.log(props); // defaultValue: true
    console.log("children:", props.children);
    return (
      <>
        <p>DeepJsxComponent</p>
        {/* 3. 布尔 / null / undefined 不会被渲染 */}
        {true}
        {undefined}
        {null}
      </>
    );
  },
};

export default DeepJsx;
