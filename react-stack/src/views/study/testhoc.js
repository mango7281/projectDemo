import React from 'react'

// 高阶组件（函数），实际上就是一个纯函数
import hoc from '@/utils/hoc'

class TestHoc extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>测试高阶组件</h1>
        { this.props.msg }
        { this.props.onInit() }
        <button onClick={this.props.onTest.bind(this)}>点击</button>
      </div>
    )
  }
}
export default hoc(TestHoc)
