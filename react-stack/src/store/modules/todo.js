import { observable, action } from 'mobx'

export default class TodoStore {
  // 共享的数据，如何定义？state
  @observable count = 0

  // 这个action只是一个装饰器的修饰符，它和vuex中的actions
  @action changeCount(payload) {
    if(payload=='add') {
      this.count++
    } else {
      this.count--
    }
  }

  // 改变共享的方法，如何定义？ mutations actions
}
