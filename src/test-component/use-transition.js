/*
 * @Author: yer
 * @Date: 2022-12-04 15:46:17
 * @LastEditors: yer
 * @LastEditTime: 2022-12-04 15:49:52
 * @FilePath: /react-test/src/test-component/use-transition.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
import { Spin } from "antd";
import { useState, useTransition } from "react";

export function UseTransition(props) {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount((c) => c + 1);
    });
  }

  return (
    <div>
      {isPending && <Spin />}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
