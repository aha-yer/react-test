/*
 * @Author: yer
 * @Date: 2022-10-17 21:41:13
 * @LastEditors: yer
 * @LastEditTime: 2022-10-17 22:04:57
 * @FilePath: /react-test/src/test-component/context-test.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
import React from "react";

const ThemeContext = React.createContext({
  dark: "#000",
  light: "#fff",
});

/**
 * 1. 方式1
 */
// class ContextTextChild extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   static contextType = ThemeContext;

//   render() {
//     return (
//       <>
//         <div>{this.context.dark}</div>
//         <div>{this.context.light}</div>
//       </>
//     );
//   }
// }

/**
 * 2. 方式2
 */
class ContextTextChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {({ dark, light }) => (
          <>
            <div>{dark}</div>
            <div>{light}</div>
          </>
        )}
      </ThemeContext.Consumer>
    );
  }
}

class ContextTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        dark: "gray",
        light: "purple",
      },
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ContextTextChild />
      </ThemeContext.Provider>
    );
  }
}

export default ContextTest;
