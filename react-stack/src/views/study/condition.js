import React from 'react'

import { Child } from '@/components'
import './style.scss'

var ele = (
  <div>
    <h1>jsx</h1>
  </div>
)

export default class Condition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bol: true,
      idx: 3,
      color: 'red',
      dis: 'inline-block',
      sty: {
        color: 'orange',
        fontSize: '50px'
      }
    }
  }

  // v-if-else
  test() {
    let { idx } = this.state
    var ele = null
    switch (idx) {
      case 1:
        ele = (<h1>11111</h1>)
        break;
      case 2:
        ele = (<h1>22222</h1>)
        break;
      case 3:
        ele = (<h1>33333</h1>)
        break;
      case 4:
        ele = (<h1>44444</h1>)
        break;
      default:
    }
    return ele
  }

  changeClass() {
    var num = Math.random()
    this.setState({
      color: num > 0.5 ? 'red' : 'green',
      dis: num > 0.5 ? 'inline-block' : 'none'
    })
  }

  render() {
    let { bol, color, dis, sty } = this.state
    return(
      <div className='condition'>
        <h1>条件渲染</h1>
        { bol && <div className='box'>hello react</div> }
        { bol && <Child></Child> }
        { bol && ele }
        { bol ? <h1>111</h1> : <h1>222</h1>}
        <hr/>
        { this.test() }
        <hr/>
        <div>
          <span className={color}>aaaa</span>
          <span>-</span>
          <span style={{color:'green',display:dis}}>bbbb</span>
          <button onClick={this.changeClass.bind(this)}>改变样式</button>
        </div>
        <hr/>
        <div>
          <h1 style={sty}>测试动态样式</h1>
        </div>
        <br/><br/><br/><br/><br/>
      </div>
    )
  }
}
