import React, { Component } from "react";
import s from "./test.css";
class MyComponent extends Component {
  render() {
    return <div className={s.intro}>Hello World</div>;
  }
}
export default MyComponent;