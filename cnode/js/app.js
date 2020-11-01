

var app = new Vue({
  el: '#app',
  data: {
    //分类导航数据
    cates: [
      { id: 1, title: '全部', tab: ''},
      { id: 2, title: '精华', tab: 'good'},
      { id: 3, title: '分享', tab: 'share'},
      { id: 4, title: '问答', tab: 'ask'},
      { id: 5, title: '招聘', tab: 'job'}
    ],
    artList: [],
    tab: '',
    page: 1,
    loaded: true
  },
  // 监听数据变化，如果发生变化，就重新调取接口
  watch: {
    tab: function(newVal, oldVal) {
      this.page = 1,
      this.getList()
    },
    page: function() {
      this.getList()
    }
  },
  mounted: function() {
    this.getList()
  },
  methods: {
    //封装调取接口的函数getList
    getList: function() {
      var that = this
      that.loaded = false
      var data = {
        page: this.page,
        tab: this.tab,
        limit: 5,
        mdrender: 'false'
      }
      fetch('/topics', 'GET', data, function(arr) {
        that.artList = arr
        that.loaded = true
      })
    }
  }
})
