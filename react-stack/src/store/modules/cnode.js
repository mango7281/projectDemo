import { observable, action, autorun, computed } from 'mobx'

import { fetchCnodeList } from '@/utils/api'

export default class CnodeStore {
  @observable list = []
  @action getCnodeList(params) {
    fetchCnodeList(params).then(res=>{
      console.log('res', res)
      this.list = res
    })
  }

  // 计算属性，当被关联的变量发生变化时，会重新计算获取最新的值
  @computed get length() {
    return this.list.length
  }

  // 自动运行
  getList = autorun(()=>{
    let params = {
      page: 1,
      tab: '',
      limit: 5
    }
    fetchCnodeList(params).then(res=>{
      console.log('res', res)
      this.list = res
    })
  })
}
