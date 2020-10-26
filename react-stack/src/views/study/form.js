import React from 'react'

import { Ref } from '@/components'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'xia',
      password: '',
      sportArr: [
        { id: 1, label:'足球'},
        { id: 2, label:'篮球'},
        { id: 3, label:'羽毛球'},
        { id: 4, label:'排球'}
      ],
      sport: 1,
      age: 0,
      task: ''
    }
  }
  userHandle(e) {
    // console.log('1')
    this.setState({
      username: e.target.value
    })
  }
  passHandle(e) {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  submit() {
    var data = {
      username: this.state.username,
      password: this.state.password,
      mobile: document.getElementById('mobile').value,
      address: this.refs.address.value
    }
    console.log('data', data)
  }

  refFn() {
    console.log('我是Form父组件')
  }
  refHandle() {
    this.refs.box.style.color = 'red'
    this.refs.child.childFn()
    console.log(this.refs.child.state.msg)
    console.log(this.refs.child.props.aaa)
    this.refs.child.props.onTest()
  }


  createSportSelect() {
    let { sportArr } = this.state
    return sportArr.map(ele=>(
      <option key={ele.id} value={ele.id}>{ele.label}</option>
    ))
  }

  // 方法复用
  formChange(key, e) {
    this.setState({
      [key]: e.target.value
    })
  }

  keyHandle(e) {
    let { task } = this.state
    if (e.keyCode == 13) {
      var arr = this.state.sportArr
      arr.push({id: Date.now(), label: task })
      this.setState({
        sportArr: arr,
        task: ''
      })
    }
  }

  render() {
    let { username, password, sport, age, task } = this.state
    return (
      <div>
        <h1>表单测试</h1>


        <br/>
        { /*受控表单*/ }
        <input value={username} onChange={this.userHandle.bind(this)} type="text"/>

        { /*不算是严格意义的受控表单*/ }
        <input defaultValue={''} onInput={this.passHandle.bind(this)} type="text"/>

        { /*非受控表单*/ }
        <input id='mobile' type="text"/>
        <input ref='address' type="text"/>
        <input type="file"/>
        <button onClick={this.submit.bind(this)}>提交数据</button>

        <hr/>
        <div ref='box'>hello ref</div>
        <Ref ref='child' aaa='aaa' onTest={this.refFn.bind(this)}></Ref>
        <button onClick={this.refHandle.bind(this)}>Ref操作</button>

        <hr/>
        <select value={sport} onChange={this.formChange.bind(this, 'sport')}>
          {this.createSportSelect()}
        </select>
        <input type="text" value={age} onChange={this.formChange.bind(this, 'age')}/>
        <hr/>

        <input type="text" value={task} onChange={this.formChange.bind(this, 'task')} onKeyUp={this.keyHandle.bind(this)}/>


      </div>
    )
  }
}
