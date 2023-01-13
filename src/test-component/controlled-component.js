import { useState } from "react";

/*
 * @Author: yer
 * @Date: 2022-10-30 17:01:26
 * @LastEditors: yer
 * @LastEditTime: 2022-10-30 17:19:46
 * @FilePath: /react-test/src/test-component/controlled-component.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */

/**
 * 受控组件通过劫持元素的 value event 来实现绑定和更新数据的目的
 */
function ControlledComponent(props) {
  const [iptData, setIptDate] = useState("init");
  const inputHandler = (e) => {
    setIptDate(e.target.value);
  };
  return (
    <div>
      <input value={iptData} onChange={inputHandler} />
      <div>
        show:
        <span>{iptData}</span>
      </div>
    </div>
  );
}

export default ControlledComponent;
