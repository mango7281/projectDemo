<template lang="html">
<div>
  <h1>购物车</h1>
</div>
</template>

<script>
export default {
  // 局部路由守卫：只拦截那些来到Cart组件的路由跳转行为
  // 路由钩子，由vue-router给的
  // 不能访问到this
  beforeRouteEnter(to, from, next) {
    // console.log(to,from)
    let isLogin = false
    if (isLogin) {
      next()
    } else {
      next('/user')
    }
    // next调用，表示允许通过，请进入下一步
  }
}
</script>

<style lang="css" scoped>
</style>
