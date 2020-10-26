import React from 'react'

// 容器组件：对UI组件进行包装或修饰
// UI组件：普普通通的业务组件

// 这就是一个函数（纯函数），也是容器组件
// 第一个参数，必须是组件
export default function hoc(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        msg: 'hello child',
        arr: [
          { id: 1, label: '中国' },
          { id: 2, label: '英国' },
          { id: 3, label: '德国' }
        ]
      }
    }
    componentDidMount() {
      console.log('mounted')
    }
    click() {
      console.log('child click', this)
    }
    createList() {
      let { arr } = this.state
      return arr.map(ele=>(
        <div key={ele.id}>{ele.label}</div>
      ))
    }

    render() {
      return (
        <div>
          <h3>hoc header</h3>
          <WrappedComponent
            msg={this.state.msg}
            onTest={this.click}
            onInit={this.createList.bind(this)}
          >
          </WrappedComponent>
          <h3>hoc footer</h3>
        </div>
      )
    }
  }
}


// 函数组件（无状态组件）
// function Model(props) {
//   return()
// }
