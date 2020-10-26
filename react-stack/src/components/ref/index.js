import React from 'react'

export default class Ref extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '我是ref子组件'
    }
  }
  childFn() {
    console.log('---------------',this.state.msg)
  }
  render() {
    return (
      <div>
        <h3>我是ref子组件</h3>
      </div>
    )
  }
}
