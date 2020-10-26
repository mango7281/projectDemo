<template>
<div>
  <h1 class='world' @click='clickHandle'>hello world</h1>
</div>
</template>

<script>
// 抛出当前组件实例
export default {
  data: function() {
    return {
      msg: 'world'
    }
  },
  created() {
    console.log('world created')
  },
  methods: {
    clickHandle() {
      console.log(this.msg)
    }
  }
}
</script>

<style>
.world {
  color: green;
}
</style>
