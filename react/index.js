/*
 * @Author: your name
 * @Date: 2021-09-13 22:35:03
 * @LastEditTime: 2021-09-18 08:22:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_simple/react/index.js
 */

const createElement = (tag, attrs, ...children) => {
  return {
    tag, //外层的标签
    attrs, // 属性，是一个对象
    children, // 是一个数组
  };
};

const React = {
  createElement,
};

export default React;
