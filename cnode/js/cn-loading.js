
//跳转显示gif图片

Vue.component('cn-loading', {
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  template: `
  <div class="loading" v-if='show'>
    <img src="../img/loading.gif" alt="加载中" />
  </div>
  `
})
