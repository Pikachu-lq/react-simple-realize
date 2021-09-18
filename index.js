/*
 * @Author: your name
 * @Date: 2021-09-13 08:28:02
 * @LastEditTime: 2021-09-18 08:31:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_simple/index.js
 */

import React from "./react";
import ReactDOM from "./react-dom";

// 如果不设置.babelrc文件，编译会报错
const ele = (
  <div title="123" className="active">
    hello,<span>react</span>
  </div>
);
// babel转译上面的ele
// const ele = /*#__PURE__*/React.createElement("div", {
//     title: "123"
//   }, "hello,", /*#__PURE__*/React.createElement("span", null, "react"));

// ReactDOM.render("React", document.querySelector("#root"));
ReactDOM.render(ele, document.querySelector("#root"));

// console.log("ReactDOM", ReactDOM);
