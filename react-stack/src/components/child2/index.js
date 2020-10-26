import React from 'react'

export default class Child2 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { role } = this.props
    return(
      <div>
        <h3>子组件 - 2</h3>
        <h3>
          {role}
          {/*<button onClick={this.props.onRoleChange.bind(this,'正常用户')}>改变</button>*/}
          <button onClick={()=>this.props.onRoleChange('正常用户')}>改变</button>
        </h3>
      </div>
    )
  }
}
