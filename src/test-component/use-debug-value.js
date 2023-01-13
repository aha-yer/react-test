/*
 * @Author: yer
 * @Date: 2022-12-04 15:29:19
 * @LastEditors: yer
 * @LastEditTime: 2022-12-04 15:45:57
 * @FilePath: /react-test/src/test-component/use-debug-value.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
import { useDebugValue, useState } from "react";

function useMyHook() {
  const [isOnline] = useState(null);
  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
}

export function UseDebugValue(props) {
  const isOnline = useMyHook();
  return (
    <>
      <p>{isOnline}</p>
      <p>UseDebugValue</p>
    </>
  );
}
