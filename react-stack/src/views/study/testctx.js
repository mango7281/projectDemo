import React from 'react'

import { ThemeContext } from '@/utils/theme'
export default class TestCtx extends React.Component {
  render() {
    console.log('ctx', this.context)
    let ctx = this.context
    return(
      <div style={{color: ctx.color, background: ctx.background}}>
        <h1>测试上下文</h1>
      </div>
    )
  }
}
TestCtx.contextType = ThemeContext
