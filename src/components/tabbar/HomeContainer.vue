<template>
  <div class="homeContainer">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for='item in lunbotuList'
                     :key='item.id'>
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../assets/images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeContainer',
  data () {
    return {
      lunbotuList: []
    }
  },
  methods: {
    getLunbotu () {
      this.$ajax.get('api/getlunbo').then(res => {
        this.lunbotuList = res.data.message
      })
    }
  },
  created () {
    this.getLunbotu()
  }
}
</script>

<style lang="stylus" scoped>
.mint-swipe
  height: 10em
  .mint-swipe-item
    &:nth-child(1)
      background-color: red
    &:nth-child(2)
      background-color: pink
    &:nth-child(3)
      background-color: green
  img
    width: 100%
    height: 100%
.mui-grid-view.mui-grid-9
  background-color: #fff
  border: none
  .mui-table-view-cell
    border: 0
  img
    width: 60px
    height: 60px
  .mui-media-body
    font-size: 0.9em
</style>
