import { useEffect, useLayoutEffect, useState } from "react";

/**
 * 1. useEffect: 渲染后执行
 * 2. useLayoutEffect: 渲染前执行
 */
export function EffectAndLayoutEffect(props) {
  const [state, setState] = useState("hello world");

  //   useEffect(() => {
  //     let i = 0;
  //     while (i <= 100000000) {
  //       i++;
  //     }
  //     setState("world hello");
  //   }, []);

  useLayoutEffect(() => {
    let i = 0;
    while (i <= 10000000000) {
      i++;
    }
    setState("world hello");
  }, []);

  return (
    <>
      <div>{state}</div>
    </>
  );
}
