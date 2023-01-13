/*
 * @Author: yer
 * @Date: 2022-10-28 16:57:26
 * @LastEditors: yer
 * @LastEditTime: 2022-10-28 17:07:08
 * @FilePath: /react-test/src/test-component/immutable-data.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
import { useState } from "react";

function ImmutableData(props) {
  const [data, setData] = useState([1, 2]);
  const [objData, setObjData] = useState({ color: "purple" });
  const clickHandler = (e) => {
    setData((preState) => [...preState, preState[preState.length - 1] + 1]);
    setObjData((preState) => Object.assign({}, preState, { color: "white" }));
  };
  return (
    <>
      {data.map((num) => (
        <div>{num}</div>
      ))}
      {Object.keys(objData).map((key) => (
        <div>
          {key}: {objData[key]}
        </div>
      ))}
      <button onClick={clickHandler}>+1</button>
    </>
  );
}

export default ImmutableData;
