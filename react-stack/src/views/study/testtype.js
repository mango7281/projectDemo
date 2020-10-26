import React from 'react'


import { Child3 } from '@/components'
export default class TestType extends React.Component {
  render() {
    return(
      <div>
        <Child3 aaa={'1000'} bbb={true}></Child3>
      </div>
    )
  }
}
