import React from 'react'

// prop-types 用于规范子组件的自定义属性

import PropTypes from 'prop-types'

class Child3 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <h3>子组件 - 3</h3>
        <h3>{this.props.aaa}</h3>
      </div>
    )
  }
}

// 检测数据类型
Child3.propTypes = {
  aaa: PropTypes.string,
  bbb: PropTypes.bool.isRequired
}

export default Child3
