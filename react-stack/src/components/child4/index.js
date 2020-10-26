import React from 'react'

// 高阶函数
import { withRouter } from 'react-router-dom'

class Child4 extends React.Component {
  constructor(props) {
    super(props)
  }
  skipToAdd() {
    console.log('---child4', this.props)
    this.props.history.push('/jsx')
  }
  render() {
    return(
      <div>
        <button onClick={this.skipToAdd.bind(this)}>跳转到jsx页面</button>
      </div>
    )
  }
}

export default withRouter(Child4)
