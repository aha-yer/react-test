/*
 * @Author: yer
 * @Date: 2022-10-17 20:37:10
 * @LastEditors: yer
 * @LastEditTime: 2022-12-02 20:58:35
 * @FilePath: /react-test/src/test-component/error-boundary-test.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
function ErrorBoundaryTest(props) {
  /**
   * 1. try-catch
   */
  try {
    throw new Error("hhh");
  } catch (error) {}
  if (Math.random() * 10 < 5) throw new Error("hhh");

  /**
   * 2. 事件处理器
   */
  const clickHandler = (e) => {
    throw new Error("hhh");
  };

  /**
   * 3. 异步代码: 执行时已经渲染完成
   */
  // setTimeout(() => {
  //   throw new Error("hhh");
  // });

  return (
    <>
      <button onClick={clickHandler}>click</button>
    </>
  );
}

export default ErrorBoundaryTest;
