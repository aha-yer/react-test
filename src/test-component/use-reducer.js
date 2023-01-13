import { useReducer, useState } from "react";

/*
 * @Author: yer
 * @Date: 2022-12-02 13:15:38
 * @LastEditors: yer
 * @LastEditTime: 2022-12-02 13:31:38
 * @FilePath: /react-test/src/test-component/use-reducer.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */

// useReducer 基本功能实现
// function useReducer(reducer, initialState) {
//   const [state, setState] = useState(initialState);
//   function dispatch(action) {
//     setState(reducer(state, action));
//   }
//   // 使用闭包保存state状态
//   return [state, dispatch];
// }

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function UseReducer(props) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>
  );
}
