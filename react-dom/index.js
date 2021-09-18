/*
 * @Author: your name
 * @Date: 2021-09-16 08:16:18
 * @LastEditTime: 2021-09-18 08:39:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_simple/react-dom/index.js
 */
// const ele = (
//   <div title="123">
//     hello,<span>react</span>
//   </div>
// );
// babel转译上面的ele
// const ele = /*#__PURE__*/React.createElement("div", {
//     title: "123"
//   }, "hello,", /*#__PURE__*/React.createElement("span", null, "react"));

/**
 * 在赋值上面使用箭头函数，render有值
 ReactDOM {render: ƒ}
 */
const render = (vnode, container) => {
  if (vnode === undefined) return;
  // vnode是字符串
  if (typeof vnode === "string") {
    // 创建文本节点
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }
  //  vnode是虚拟dom
  const { tag, attrs } = vnode;
  const dom = document.createElement(tag);
  if (attrs) {
    // 有属性 key: className title 等传进来的属性
    Object.keys(attrs).forEach((key) => {
      const value = attrs[key];
      setAttribute(dom, key, value);
    });
  }

  // 递归渲染子节点
  vnode.children.forEach((child) => render(child, dom));

  return container.appendChild(dom);
};

// 设置属性
function setAttribute(dom, key, value) {
  // 将属性名className转换成class
  if (key === "className") {
    key = "class";
  }
  // 如果是事件 onClick onBlur ...
  if (/on\w+/.test(key)) {
    // 转小写
    key = key.toLowerCase();
    dom[key] = value || "";
  } else if (key === "style") {
    if (!value || typeof value === "string") {
      dom.style.cssText = value || "";
    } else if (value && typeof value === "object") {
      for (let i in value) {
        if (typeof value[k] === "number") {
          // 有些属性直接传数值
          dom.style[k] = value[k] + "px";
        } else {
          dom.style[k] = value[k];
        }
      }
    }
  } else {
    // 其他属性
    if (key in dom) {
      dom[key] = value || "";
    }
    if (value) {
      dom.setAttribute(key, value);
    } else {
      dom.removeAttribute(key);
    }
  }
}

const ReactDOM = {
  render,
};

/**
 * 在赋值下面使用箭头函数，render为空
 ReactDOM {render: undefined}
 */

// const render = (vnode, container) => {
//   if (vnode === undefined) return;
//   if (typeof vnode === "string") {
//     const textNode = document.createTextNode(vnode);
//     return container.appendChild(textNode);
//   }
// };
/**
 * 在赋值下面使用普通函数，render有值
 ReactDOM {render: ƒ}
 */
// function render(vnode, container) {
//   if (vnode === undefined) return;
//   if (typeof vnode === "string") {
//     const textNode = document.createTextNode(vnode);
//     return container.appendChild(textNode);
//   }
// }

export default ReactDOM;
