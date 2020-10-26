import React from 'react'

// jsx = javascript xml 语法糖
// jsx 变量、对象
// jsx 不是强制的，但jsx让代码更具可读性
// jsx 可以嵌套
// jsx 中可以使用表达式，使用方法用 单大括号进行包裹

var ele = (
  <div>
    <h1>hello jsx 2</h1>
  </div>
)


export default class Jsx extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  init() {
    return ele
  }
  render() {
    return (
      <div>
        { this.init() }
        <h1>{ Math.random() }</h1>
      </div>
    )
  }
}
