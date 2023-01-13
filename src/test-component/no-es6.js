/*
 * @Author: yer
 * @Date: 2022-10-28 20:10:22
 * @LastEditors: yer
 * @LastEditTime: 2022-10-28 20:59:16
 * @FilePath: /react-test/src/test-component/no-es6.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
/**
 * 1. defaultProps
 * 2.
 */
function NoES6(props) {
  return (
    <>
      {Object.keys(props).map((key) => (
        <div>
          {key}: {props[key]}
        </div>
      ))}
    </>
  );
}
NoES6.defaultProps = {
  color: "nothing",
};

export default NoES6;
