/*
 * @Author: yer
 * @Date: 2022-10-17 20:21:37
 * @LastEditors: yer
 * @LastEditTime: 2022-12-04 15:43:51
 * @FilePath: /react-test/src/index.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ErrorBoundary from "./components/error-boundary";

import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
