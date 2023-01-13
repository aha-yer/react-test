/*
 * @Author: yer
 * @Date: 2022-10-17 22:30:16
 * @LastEditors: yer
 * @LastEditTime: 2022-12-02 21:11:28
 * @FilePath: /react-test/src/test-component/ref-test.js
 * @Description:
 *
 * Copyright (c) 2022 by yer yerb993@gmail.com, All Rights Reserved.
 */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

function RefTest(props) {
  const [componentRefText, setComponentRefText] = useState();
  const component = useRef(null);
  const inputRef = useRef(null);
  const log1 = useRef(null);
  const log2 = useRef(null);
  const fnComponent3 = useRef(null);

  const clickHandler = (e) => {
    console.log(component.current);
  };

  useEffect(() => {
    setComponentRefText(component.current.getText());
  }, [component]);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  useEffect(() => {
    console.log(log1.current);
  }, [log1]);

  useEffect(() => {
    console.log(log2.current);
  }, [log2]);

  useEffect(() => {
    console.log("fnComponent3:", fnComponent3.current);
  }, [fnComponent3]);

  return (
    <>
      <ComponentRef ref={component} />
      <button onClick={clickHandler}>show</button>
      <p>{componentRefText}</p>
      {/* <FnComponent ref={inputRef} /> */}
      <FnComponent2 ref={inputRef} />
      <LogProp1 ref={log1} />
      <LogProp2 ref={log2} />
      <FnComponent3 ref={fnComponent3} />
    </>
  );
}

// class InputRef extends React.Component {
//   constructor(props, ref) {
//     super(props);
//     this.state = {};
//     this.inputRef = ref;
//   }
//   render() {
//     return (
//       <>
//         <input ref={this.inputRef} />
//       </>
//     );
//   }
// }

class ComponentRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getText = () => "ComponentRef outer";
  render() {
    return <div>ComponentRef inner</div>;
  }
}

/**
 * 1. 函数组件使用ref需要使用 forwardRef
 */
// 方式1: 父组件传入ref
const FnComponent = React.forwardRef((props, ref) => (
  <>
    <input ref={ref} />
  </>
));

// 方式2: 使用 useImperativeHandle
function FnComponent2(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }) /** [deps] */
  );

  return (
    <>
      <input ref={inputRef} />
    </>
  );
}
FnComponent2 = forwardRef(FnComponent2);

function FnComponent3(props, ref) {
  return <p>FnComponent3</p>;
}

/**
 * 2. ref in HOC(high order component)
 */
// ref 引用的是LogProps
function logProps1(Component) {
  class LogProps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  return LogProps;
}
// 使用 forwardRef 将 ref 传给指定的html元素 或 组件
// ref 引用 Component
function logProps2(Component) {
  class LogProps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      const { forwardRef, ...rest } = this.props;
      return <Component ref={forwardRef} {...rest} />;
    }
  }
  return React.forwardRef((props, ref) => (
    <LogProps forwardRef={ref} {...props} />
  ));
}
// const LogPropsTest = React.forwardRef((props, ref) => {
//   function getText() {
//     return "hhh";
//   }
//   return <input />;
// });
class LogPropsTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getText() {
    return "hhh";
  }
  render() {
    return <input />;
  }
}
const LogProp1 = logProps1(LogPropsTest);
const LogProp2 = logProps2(LogPropsTest);

export default RefTest;
