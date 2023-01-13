/*
 * @Author: yer
 * @Date: 2022-12-05 19:24:47
 * @LastEditors: yer
 * @LastEditTime: 2022-12-06 15:26:27
 * @FilePath: /react-test/src/test-component/create-expensive-objects-lazily.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */

import { useState, useRef } from "react";

export function CreateExpensiveStateObject(props) {
  // not
  // const [count, setCount] = useState((() => {
  // 	console.log('initial')
  // 	return 1
  // })())

  // but
  const [count, setCount] = useState(() =>
    (() => {
      console.log("initial");
      return 1;
    })()
  );

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </>
  );
}

// 避免频繁实例化新的对象
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
export function CreateExpensiveRefObject(props) {
  const studentRef = useRef(null);

  // 避免重新渲染时重新初始化实例对象
  // 在需要使用的时候调用该函数即可
  function getStudentObject() {
    if (studentRef.current === null)
      studentRef.current = new Student("yer", -1);
    return studentRef.current;
  }

  return (
    <>
      <p>name: {getStudentObject().name}</p>
      <p>age: {getStudentObject().age}</p>
    </>
  );
}
