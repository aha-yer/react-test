/*
 * @Author: yer
 * @Date: 2022-12-05 12:40:19
 * @LastEditors: yer
 * @LastEditTime: 2023-01-03 22:08:06
 * @FilePath: /react-test/src/test-component/test.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
import { useEffect, useReducer, useState } from "react";

// export function Test(props) {
//   const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);
//   const [data, setData] = useState(0);
//   return (
//     <>
//       <p>ignore: {ignore}</p>
//       <p>data: {data}</p>
//       <button onClick={() => forceUpdate()}>+1</button>
//     </>
//   );
// }

// export function Test(props) {
//   //   const [data, setData] = useState(
//   //     (() => {
//   //       console.log("initial");
//   //       return 1;
//   //     })()
//   //   );
//   const [data, setData] = useState(() =>
//     (() => {
//       console.log("initial");
//       return 1;
//     })()
//   );

//   return (
//     <>
//       <p>{data}</p>
//       <button onClick={() => setData(data + 1)}>+1</button>
//     </>
//   );
// }

// export function Test(props) {
//   const [state, setState] = useState(1);
//   // #1 state
//   // useEffect(() => {
//   //   console.log(state);
//   //   setState(state + 1);
//   //   console.log(state);
//   //   setState(state + 1);
//   //   console.log(state);
//   // }, []);

//   return (
//     <div>
//       <Child value={state} onIncrement={() => setState((state) => state + 1)} />
//     </div>
//   );
// }

// const Child = ({ value, onIncrement }) => {
//   // Prop
//   useEffect(() => {
//     console.log(value);
//     onIncrement();
//     console.log(value);
//     onIncrement();
//     console.log(value);
//   }, []);
//   return <div></div>;
// };

// useEffect run twice
export const Test = () => {
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return <div></div>;
};
