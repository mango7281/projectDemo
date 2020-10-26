<template lang="html">
<div>
  <h1 @click='changeMsg'>发现<span v-text='msg'></span></h1>
  <h1 v-text='msg2'></h1>
  <div class="tabs2">
    <!-- 二级路由 -->
    <!-- 大多数情况下，exact-active-class 和 active-class 用哪个都可以 -->
    <router-link to='/find/good' tag='span' exact-active-class='on'>发现好货</router-link>
    <router-link to='/find/price' tag='span' exact-active-class='on'>发现优惠</router-link>
  </div>

  <!-- 这是二级路由的位置 -->
  <router-view></router-view>

</div>
</template>

<script>

// mapState的作用是把Vuex中的state数据映射进行，在计算属性 ...mapState([]) 然后通过this.进行访问
// mapGetters的作用是把Vuex中的getters数据映射进来，在计算属性进行映射，然后通过this.进行访问
// mapActions用于映射Vuex中的actions方法，在methods选项中进行映射，然后this.进行访问
// mapMutations用于映射Vuex中的mutations方法，在methods选项中进行映射，然后this.进行访问

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Find',   // name选项的作用是给当前取个名字，便于在devtools查看
  computed: {
    // 当多个子module中的state有名称冲突时，建议优先把自己的module中变量改个名字，即可。
    ...mapState('study', ['msg', 'foo']),
    ...mapGetters('study', ['msg2']),
    ...mapState('song', ['songMsg'])
  },
  mounted() {
    console.log('map', this.msg, this.songMsg, this.foo)
  },
  methods: {
    ...mapMutations('study', ['updateMsg']),
    ...mapActions('study', ['asyncUpdateMsg']),
    changeMsg() {
      // 不建议直接如此粗暴地修改vuex中的状态组数
      // this.$store.state.msg++

      let payload = {
        count: 10,
        type: '请查收，谢谢'
      }

      // 向store提交一个名叫updateMsg的Mutation方法，去申请同步地改变msg
      // this.$store.commit('updateMsg', payload)
      // this.updateMsg(payload)

      // 向store派发一个名叫asyncUpdateMsg的Action方法，申请异步地修改msg
      // this.$store.dispatch('asyncUpdateMsg', payload)
      this.asyncUpdateMsg(payload)
    }
  }

}
</script>

<style lang="css" scoped>
.tabs2 {
  display: flex;
}
.tabs2>span {
  flex: 1;
  border: 1px solid #ccc;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.tabs2>span.on {
  color: red;
}
</style>
