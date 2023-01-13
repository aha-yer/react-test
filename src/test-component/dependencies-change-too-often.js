/*
 * @Author: yer
 * @Date: 2022-12-05 18:48:38
 * @LastEditors: yer
 * @LastEditTime: 2022-12-05 18:55:13
 * @FilePath: /react-test/src/test-component/dependencies-change-too-often.js
 * @Description: 如何避免effet频繁更新
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */

import { useEffect, useRef, useState } from "react";

export function DependenciesChangeTooOfen(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1); // #1 这里要避免直接调用 count
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>count: {count}</p>;
}

// 使用ref记录
export function DependenciesChangeTooOfen2(props) {
  const lastProps = useRef(props);

  useEffect(() => {
    lastProps.current = props;
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(lastProps.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);
}
