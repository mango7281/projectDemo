<template>
  <div class="app">

    <!-- 路由的视图容器 -->
    <!-- 它的作用就是告诉vue在哪里显示路由匹配的组件 -->
    <!-- 用于显示匹配成功的页面组件 -->
    <!-- 它的默认名字叫default -->
    <!-- 这是一级路由的位置 -->
    <router-view></router-view>

    <!-- 命名视图 -->
    <!-- <router-view name='aaa'></router-view>
    <router-view name='bbb'></router-view>
    <router-view name='ccc'></router-view> -->

    <div class="tabs">
      <!-- 它就是一个a标签，它的作用就是触发url路径的变化 -->
      <!-- to属性，表示要跳转到哪个路径 -->
      <!-- tag属性，指定最终渲染成哪个HTML标签 -->
      <!-- active-class用于指定高亮样式的类名 -->

      <!-- 声明式导航 -->
      <router-link :to='{name: "home"}' tag='span' active-class='on'>首页</router-link>
      <router-link to='/find' tag='span' active-class='on'>发现</router-link>
      <router-link to='/cart' tag='span' active-class='on'>购物车</router-link>
      <router-link to='/user' tag='span' active-class='on'>我的</router-link>

      <!-- 编程式导航 -->
      <!-- 底部tab导航，不建议使用编程式导航来实现，因为this.$router.push()不支持向路由栈中推入相同的路由 -->
      <!-- <span @click='skip(1)'>首页</span>
      <span @click='skip(2)'>发现</span>
      <span @click='skip(3)'>购物车</span>
      <span @click='skip(4)'>我的</span> -->

    </div>
  </div>
</template>

<script>

// 引入、导入
// import HelloWorld from './components/HelloWorld.vue'
// import World from './components/World.vue'

// import fetch from '@/utils/fetch'

export default {
  name: 'App',
  // 监听器，可以监听路由的变化
  watch: {
    $route: function(to, from) {
      console.log('watch',to, from)
    }
  },
  components: {
    // HelloWorld,
    // World
  },
  mounted() {
    console.log('路由', this.$route)
    console.log('路由', this.$router)
    console.log('vuex', this.$store)

    // 调用cnode接口
    // fetch({
    //   url: '/topics',
    //   method: 'GET',
    //   params: {page:1,limit:5,tab:'ask',mdrender:'false'}
    // }).then(res=>{
    //   console.log('请求成功', res)
    // })

    let params = {
      ct:24,
      qqmusic_ver:1298,
      new_json:1,
      remoteplace:'txt.yqq.song',
      searchid: 54616638128860322,
      t:0,
      aggr:1,
      cr:1,
      catZhida:1,
      lossless:0,
      flag_qc:0,
      p:1,
      n:10,
      w:'%E5%91%A8%E6%9D%B0%E4%BC%A6',
      g_tk_new_20200303:5381,
      g_tk:5381,
      loginUin:0,
      hostUin:0,
      format:'json',
      inCharset:'utf8',
      outCharset:'utf-8',
      notice:0,
      platform:'yqq.json',
      needNewCode:0
    }
    console.log(params)

    // 调用QQ音乐接口
    // fetch({
    //   url: '/soso/fcgi-bin/client_search_cp',
    //   method: 'GET',
    //   params: params
    // }).then(res=>{
    //   console.log('QQ', res)
    // }).catch(err=>{
    //   console.log('QQ', err)
    // }).finally(()=>{
    //   console.log('无论成功或失败，我都会被打印出来')
    // })

  },
  methods: {
    // this.$route 中记录当前url的各种匹配关系
    // this.$router 这个用于编程式路由导航
    // .push()  路由栈（先进后出）
    // .replace()
    // 声明式导航和编程式导航，怎么灵活使用呢？答：如果是侧边栏类似的导航建议用声明式导航，如果按钮跳转时使用编程式导航。
    // skip(idx) {
    //   switch (idx) {
    //     case 1:
    //       // this.$router.push('/home')  // 使用path进行跳转
    //       // this.$router.push('/x')     // 使用别名进行跳转
    //       this.$router.push({name: 'home'})   // 使用路由命名进行跳转
    //       // this.$router.replace('/home')
    //       break;
    //     case 2:
    //       this.$router.push('/find')
    //       // this.$router.replace('/find')
    //       break;
    //     case 3:
    //       this.$router.push('/user')
    //       break;
    //     case 4:
    //       this.$router.push('/user')
    //       // this.$router.replace('/user')
    //       break;
    //     default:
    //   }
    // }
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
  position: relative;
}
.tabs {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
}
.tabs span {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 80px;
}
.tabs span.on {
  color: red;
}
.box {
  position: absolute;
  bottom: 120px;
  right: 0;
}
.box1 {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
