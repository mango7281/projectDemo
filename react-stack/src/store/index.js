
import TodoStore from './modules/todo'
import CnodeStore from './modules/cnode'

class Store {
  constructor() {
    this.todo = new TodoStore()
    this.cnode = new CnodeStore()
  }
}

// 抛出Store类的实例
export default new Store()
