/*
 * @Author: yer
 * @Date: 2022-10-17 20:25:16
 * @LastEditors: yer
 * @LastEditTime: 2022-10-17 20:43:56
 * @FilePath: /react-test/src/components/error-boundary.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("catched in ErrorBoundary");
    // console.log(error, errorInfo);
    // TODO: 上报服务器
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}

export default ErrorBoundary;
