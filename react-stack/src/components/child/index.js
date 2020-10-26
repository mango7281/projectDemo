import React from 'react'


// 无状态 state 组件

// 函数式的无状态组件
// function Child(props) {
//   return (
//     <div>
//       <h1>user 子组件</h1>
//       <span>{props.aaa}</span>
//       <span>-</span>
//       <span>{props.bbb}</span>
//       <span>-</span>
//       <span>{props.ccc}</span>
//     </div>
//   )
// }

// 箭头函数式的无状态组件
const Child = (props) => (
  <div>
    <h1>user 子组件</h1>
    <span>{props.aaa}</span>
    <span>-</span>
    <span>{props.bbb}</span>
    <span>-</span>
    <span>{props.ccc}</span>
  </div>
)

export default Child
