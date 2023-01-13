import { useState } from "react";

/*
 * @Author: yer
 * @Date: 2022-10-29 11:48:41
 * @LastEditors: yer
 * @LastEditTime: 2022-10-30 11:19:18
 * @FilePath: /react-test/src/test-component/render-prop.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
export function Cat(prop) {
  return (
    <img
      src="./images/cat.png"
      style={{ position: "absolute", left: prop.mouse.x, top: prop.mouse.y }}
      alt="nothing"
    />
  );
}

export function RenderProp(prop) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const mouseMoveHanler = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div style={{ height: "100vh" }} onMouseMove={mouseMoveHanler}>
      {prop.render && prop.render(pos)}
    </div>
  );
}

function wightMouse(Component) {
  return function (prop) {
    return <RenderProp render={(mouse) => <Component mouse={mouse} />} />;
  };
}

export const RenderPropHOC = wightMouse(Cat);
