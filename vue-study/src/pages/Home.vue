<template lang="html">
<div>
  <h1>首页<span v-text='msg'></span></h1>
  <h1 v-text='msg2'></h1>

  <!-- 绝对路径 -->
  <img :src="img.jdicon" alt="">
  <img :src="img.car" alt="">
  <img :src="img.train" alt="">
  <img :src="img.plane" alt="">
  <img :src="img.a" alt="">


  <!-- 这种引入方式，在打包时，图片不做任何处理 -->
  <img src="/1.png" alt="">

  <!-- 相对路径 -->
  <!-- 这种引入方式，在打包时，图片会被webpack作处理 -->
  <img src="../assets/logo.png" alt="">

  <!-- 尽量避免使用background-image来做图片 -->
  <div class="img1"></div>
  <div class="img2"></div>





  <!-- 渲染音乐列表 -->
  <div>
    <div v-for='item in songList' :key='item.id'>
      <span v-text='item.name'></span>
    </div>
  </div>


  <div class='list'>
    <!-- 声明式导航（不建议这么写） -->
    <!-- <div v-for='item in goods' :key='item.id'>
      <router-link :to='"/detail/"+item.id' tag='span'>
        <span v-text='item.id'></span>
        <span>-</span>
        <span v-text='item.name'></span>
      </router-link>
    </div> -->

    <!-- 编程式导航（建议的写法） -->
    <div v-for='item in goods' :key='item.id' @click='skip(item.id)'>
      <span v-text='item.id'></span>
      <span>-</span>
      <span v-text='item.name'></span>
    </div>

  </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import img from '@/utils/imgs'
export default {
  data: function(){
    return {
      img,
      goods: [
        { id:1, name: '笔记本', price: '5000'},
        { id:2, name: '鼠标', price: '100'},
        { id:3, name: '键盘', price: '300'},
        { id:4, name: '耳机', price: '200'}
      ]
    }
  },
  computed: {
    ...mapState('study', ['msg']),
    ...mapGetters('study', ['msg2']),
    ...mapState('song', ['songList'])
  },
  mounted() {
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
      // w: '%E5%91%A8%E6%9D%B0%E4%BC%A6',
      w:'周杰伦',
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
    this.getQQMusic(params)
  },
  methods: {
    ...mapActions('song', ['getQQMusic']),
    skip(id) {
      this.$router.push('/detail/'+id)
    }
  }
}
</script>

<style lang="css" scoped>
img {
  display: inline-block;
  width: 100px;
  height: 100px;
}
.img1 {
  width: 100px;
  height: 100px;
  background: url('/1.png') no-repeat 0 0 / 100px 100px white;
}
.img2 {
  width: 100px;
  height: 100px;
  background: url('../assets/logo.png') no-repeat 0 0 / 100px 100px white;
}
.list {
  display: flex;
}
.list>div {
  flex: 1;
  border: 1px solid #ccc;
}
</style>
