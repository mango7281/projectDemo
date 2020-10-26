import React from 'react'

export default class Life extends React.Component {

  /* 挂载阶段 */

  // 构造器
  // 不能使用setState()
  // 也不能把props赋值给state
  constructor(props) {
    // 调用父类的构造器
    super(props)
    this.state = {
      count: 1
    }
    console.log('----contructor')
  }
  // 很少用
  // static getDerivedStateFromProps() {
  //   console.log('----getDerivedStateFromProps')
  //   return null
  // }
  // 非常重要：表达DOM准备就绪、动态数据都已经初始化完成
  componentDidMount(){
    console.log('----componentDidMount')
    // 开启长连接
    // 开定时器
    // 调接口
  }


  /* 更新阶段 */

  // Diff运算的开关
  shouldComponentUpdate() {
    console.log('----shouldComponentUpdate')
    return true
  }
  // 很少用
  // getSnapshotBeforeUpdate(){
  //   console.log('----getSnapshotBeforeUpdate')
  //   return null
  // }
  // DOM更新完成时
  componentDidUpdate() {
    console.log('----componentDidUpdate')
  }

  /* 卸载阶段 */
  componentWillUnmount(){
    console.log('----componentWillUnmount')
    // 关闭长连接
    // 清除定时器
  }

  click() {
    // this.setState(prevState=>({count: prevState.count+1}))
    this.setState(prevState=>{
      return {
        count: prevState.count+1
      }
    })
  }

  // 唯一的一个必须要的钩子函数
  render() {
    console.log('----render')
    return(
      <div>
        <h1>生命周期测试</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.click.bind(this)}>点击</button>
      </div>
    )
  }
}
