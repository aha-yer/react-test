/*
 * @Author: yer
 * @Date: 2022-10-17 20:21:37
 * @LastEditors: yer
 * @LastEditTime: 2023-01-12 14:05:19
 * @FilePath: /react-test/src/App.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
import ErrorBoundaryTest from "./test-component/error-boundary-test";
import ContextTest from "./test-component/context-test";
import RefTest from "./test-component/ref-test";
import RefTest2 from "./test-component/ref-test2";
import ReactInOtherApp from "./test-component/react-in-other-app";
import DeepJsx from "./test-component/deep-jsx";
import ImmutableData from "./test-component/immutable-data";
import Parent from "./test-component/portals";
import NoES6 from "./test-component/no-es6";
import { Cat, RenderProp, RenderPropHOC } from "./test-component/render-prop";
import ControlledComponent from "./test-component/controlled-component";
import UncontrolledComponent from "./test-component/uncontrolled-component";
import { EffectAndLayoutEffect } from "./test-component/effect";
import { UseReducer } from "./test-component/use-reducer";
import { UseRef } from "./test-component/use-ref";
import { UseDebugValue } from "./test-component/use-debug-value";
import { UseTransition } from "./test-component/use-transition";
import { GetDataDemo } from "./test-component/react-get-data";
import { Test } from "./test-component/test";
import { CallbackRef } from "./test-component/callback-ref";
import {
  DependenciesChangeTooOfen,
  DependenciesChangeTooOfen2,
} from "./test-component/dependencies-change-too-often";
import {
  CreateExpensiveRefObject,
  CreateExpensiveStateObject,
} from "./test-component/create-expensive-objects-lazily";
import { DataFetchHook } from "./components/data-fetch-hook";

function App() {
  return (
    <div className="App">
      <h1>TEST</h1>
      {/* 1. 高级指引 */}
      {/* <ErrorBoundaryTest /> */}
      {/* <ContextTest /> */}
      {/* <RefTest /> */}
      {/* <RefTest2 /> */}
      {/* <ReactInOtherApp /> */}
      {/* <DeepJsx.DeepJsxComponent defaultValue>
        hhh
        <br />
        {true}
        <ReactInOtherApp />
        {(index) => <div>{index}</div>}
      </DeepJsx.DeepJsxComponent> */}
      {/* <ImmutableData /> */}
      {/* <Parent /> */}
      {/* <NoES6 fromParent="hhh" /> */}
      {/* <RenderProp render={(mouse) => <Cat mouse={mouse} />} /> */}
      {/* <RenderPropHOC /> */}
      {/* <UncontrolledComponent /> */}
      {/* <ControlledComponent /> */}

      {/* 2. api reference */}
      {/* 3. hook */}
      {/* <EffectAndLayoutEffect /> */}
      {/* <UseReducer /> */}
      {/* <UseRef /> */}
      {/* <UseDebugValue /> */}
      {/* <UseTransition /> */}
      {/* <GetDataDemo /> */}
      {/* <CallbackRef /> */}
      {/* <DependenciesChangeTooOfen /> */}
      {/* <DependenciesChangeTooOfen2 /> */}
      {/* <CreateExpensiveStateObject /> */}
      {/* <CreateExpensiveRefObject /> */}
      {/* <Test /> */}

      {/* 3. data fetch */}
      <DataFetchHook />
    </div>
  );
}

export default App;
