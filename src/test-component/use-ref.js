import { computeHeadingLevel } from "@testing-library/dom";
import { useRef } from "react";

/*
 * @Author: yer
 * @Date: 2022-12-02 21:41:35
 * @LastEditors: yer
 * @LastEditTime: 2022-12-02 21:44:24
 * @FilePath: /react-test/src/test-component/use-ref.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
export function UseRef(props) {
  const ref1 = useRef(1);
  return (
    <>
      <p>{ref1.current}</p>
      <button
        onClick={() => {
          ref1.current = ref1.current + 1;
          console.log(ref1.current);
        }}
      >
        +1
      </button>
    </>
  );
}
