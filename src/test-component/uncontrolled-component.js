import React, { useRef } from "react";

/*
 * @Author: yer
 * @Date: 2022-10-30 17:01:26
 * @LastEditors: yer
 * @LastEditTime: 2022-10-30 17:19:03
 * @FilePath: /react-test/src/test-component/uncontrolled-component.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */

/**
 * 非受控组件可通过 ref 获取组件 value
 */
function UncontrolledComponent(props) {
  const iptData = useRef();
  const submitHandler = (e) => {
    console.log(iptData.current.value);
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <InputComponent ref={iptData} />
      <input type="submit" value="Submit" />
    </form>
  );
}

const InputComponent = React.forwardRef((props, ref) => {
  return (
    <label>
      input data:
      <input ref={ref} />
    </label>
  );
});

export default UncontrolledComponent;
