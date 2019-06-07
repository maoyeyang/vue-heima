<template>
  <div class="homeContainer">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item) in lunboList"
                     :key='item.id'>
        <img :src="item.url">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/发现.png">
          <div class="mui-media-body">新闻资讯</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/直播.png">
          <div class="mui-media-body">图片分享</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/钱包.png">
          <div class="mui-media-body">商品购买</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/聊天.png">
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/视频.png">
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/意见.png">
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
      lunboList: []
    }
  },
  methods: {
    getLunbotu () {
      this.$ajax
        .get('http://127.0.0.1/getLunbotu')
        .then(response => {
          this.lunboList = response.data
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
  height: 14em
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
