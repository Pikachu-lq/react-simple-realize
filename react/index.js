/*
 * @Author: your name
 * @Date: 2021-09-13 22:35:03
 * @LastEditTime: 2021-09-17 08:40:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_simple/react/index.js
 */

const createElement = (tag, attrs, ...children) => {
  return {
    tag,
    attrs,
    children,
  };
};

const React = {
  createElement,
};

export default React;
