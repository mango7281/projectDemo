
//底部翻页组件

Vue.component('cn-page', {
  props: {
    value: {type: Number, required: false, default: 1}
  },
  computed: {
    arr: function() {
      var val = this.value
      // 判断页码数，并当前页码居中显示
      return this.value>3 ? [val-2, val-1, val, val+1, val+2] : [1,2,3,4,5]
    }
  },
  template:`
  <div class='pages'>
    <span @click='prev'><<</span>
    <span v-if='value>3'>...</span>
    <span
      v-for='i in arr'
      :class='{"on": i==value}'
      @click='$emit("input", i)'
      v-text='i'>
    </span>
    <span>...</span>
    <span @click='$emit("input", value+1)'>>></span>
  </div>
  `,
  methods: {
    prev: function() {
      if (this.value==1) return alert('已经是第一页了')
      this.$emit('input', this.value-1)
    }
  }
})
