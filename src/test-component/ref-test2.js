import { computeHeadingLevel } from "@testing-library/dom";
import React, { useEffect, useState } from "react";

// function RefTest2(props) {
//   let textInput = null;

//   //   const setTextInput = (element) => {
//   //     textInput = element;
//   //   };

//   const setTextInput = useState((element) => {
//     textInput = element;
//   });

//   useEffect(() => {
//     textInput.current && textInput.current.focus();
//   }, [textInput]);

//   return (
//     <>
//       <InputRef ref={setTextInput} />
//     </>
//   );
// }

/**
 * 1. 回调 Refs
 */
class RefTest2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // 保存 React实例 或 html元素
    this.textInput = null;
    // 回调函数传入一个 react实例 或 html元素
    this.setInputText = (element) => {
      console.log(1);
      this.textInput = element;
    };

    this.textInput2 = null;
    this.setInputText2 = (element) => {
      console.log(2);
      this.textInput2 = element;
    };

    this.textInput3 = null;
    this.setInputText3 = (element) => {
      console.log(3);
      this.textInput3 = element;
    };
  }

  componentDidMount() {
    // html元素
    this.textInput && console.log(this.textInput);
    // html元素
    this.textInput2 && console.log(this.textInput2);
    // React 实例
    this.textInput3 && console.log(this.textInput3);
  }
  render() {
    return (
      <>
        <InputRef ref={this.setInputText} />
        <InputRef2 inputRef={this.setInputText2} />
        <InputRef3 ref={this.setInputText3} />
      </>
    );
  }
}

const InputRef = React.forwardRef((props, ref) => {
  return <input ref={ref} />;
});

function InputRef2(props) {
  return <input ref={props.inputRef} />;
}

class InputRef3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p>InputRef3</p>;
  }
}

export default RefTest2;
