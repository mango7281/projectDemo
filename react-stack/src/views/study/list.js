import React from 'react'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [
        { id:1, name: 'zhang san' },
        { id:2, name: 'li si' },
        { id:3, name: 'wang wu' }
      ]
    }
  }

  // 数据需要处理
  initList() {
    let { arr } = this.state
    let res = []
    arr.map(ele=>{
      // 数据处理
      ele.id = ele.id *100
      res.push(
        <div key={ele.id}>
          <span>{ele.id}</span>
          <span>-</span>
          <span>{ele.name}</span>
        </div>
      )
    })
    return res
  }

  // 数据不处理
  initList2() {
    let { arr } = this.state
    var res = arr.map(ele=>(
      <div key={ele.id}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
      </div>
    ))
    return res
  }

  render() {
    let { arr } = this.state

    var res2 = arr.map(ele=>(
      <div key={ele.id}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
      </div>
    ))

    return (
      <div className='list'>
        <h1>列表渲染</h1>

        <hr/>
        <div>
          { this.initList() }
        </div>
        <hr/>
        <div>
          { this.initList2() }
        </div>
        <hr/>
        <div>
          {
            arr.map(ele=>(
              <div key={ele.id}>
                <span>{ele.id}</span>
                <span>-</span>
                <span>{ele.name}</span>
              </div>
            ))
          }
        </div>
        <hr/>
        <div>
          { res2 }
        </div>
      </div>
    )
  }
}
