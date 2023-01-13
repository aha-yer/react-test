/*
 * @Author: yer
 * @Date: 2022-12-05 17:15:45
 * @LastEditors: yer
 * @LastEditTime: 2022-12-05 17:49:28
 * @FilePath: /react-test/src/test-component/callback-ref.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
import { useCallback, useState } from "react";

// 自定义测量dom节点hook
function useClientRect() {
  const [rect, setRect] = useState(null);
  const measureRef = useCallback((element) => {
    if (element !== null) setRect(element.getBoundingClientRect());
  }, []);
  return [rect, measureRef];
}

// 测量dom节点
export function CallbackRef() {
  //   const [height, setHeight] = useState(0);

  //   const callbackRef = useCallback((element) => {
  //     if (element !== null) setHeight(element.getBoundingClientRect().height);
  //   }, []);

  //   return (
  //     <>
  //       <Child measureRef={callbackRef} />
  //       <p>{height}px</p>
  //     </>
  //   );

  const [rect, measureRef] = useClientRect();

  return (
    <>
      <Child measureRef={measureRef} />
      {rect !== null && <p>{rect.height}px</p>}
    </>
  );
}

function Child({ measureRef }) {
  const [isShow, setIsShow] = useState(false);
  if (!isShow)
    return (
      <>
        <button onClick={() => setIsShow(!isShow)}>click to show</button>
      </>
    );
  return <p ref={measureRef}>child node</p>;
}
