<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
      <div class="ball"
           v-show="ballFlag"
           ref="aaa"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu"
                  :isFull='false'></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:<del>¥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;
            销售价:<span class="now_pirce">¥{{goodsinfo.sell_price}}</span>
          </p>
          <p>购买数量:
            <numbox></numbox>
          </p>
          <p>
            <mt-button type='primary'
                       size="small">立即购买</mt-button>
            <mt-button type='danger'
                       size="small"
                       @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{goodsinfo.goods_no}}</p>
          <p>库存情况:仅剩{{goodsinfo.stock_quantity}}件</p>
          <p>上架时间:{{goodsinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type='primary'
                   size="large"
                   plain
                   @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type='danger'
                   size="large"
                   plain
                   @click="goComments(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper'
import numbox from '../subcomponents/goodsinfo_numbox'
export default {
  name: 'GoodsInfo',
  data () {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      goodsinfo: {},
      ballFlag: false
    }
  },
  methods: {
    getLunbotu () {
      this.$ajax.get('api/getthumimages/' + this.id)
        .then(res => {
          if (res.data.status === 0) {
            res.data.message.forEach(item => {
              item.img = item.src
            })
            this.lunbotu = res.data.message
          }
        })
    },
    getGoodsInfo () {
      this.$ajax.get('api/goods/getinfo/' + this.id).then(res => {
        if (res.data.status === 0) {
          this.goodsinfo = res.data.message[0]
        }
      })
    },
    goDesc (id) {
      this.$router.push({ name: 'GoodsDesc', params: { id } })
    },
    goComments (id) {
      this.$router.push({ name: 'GoodsComments', params: { id } })
    },
    addToShopCar () {
      this.ballFlag = !this.ballFlag
    },
    beforeEnter (el) {
      el.style.transform = 'translate(0,0)'
      el.style.opacity = '1'
    },
    enter (el, done) {
      // el.offsetWidth
      console.log(el.offsetWidth)
      el.style.transform = 'translate(68px,180px)'
      el.style.transition = 'all 1s ease'
      el.style.opacity = '1'
      done()
    },
    afterEnter (el) {
      el.style.opacity = '1'
      this.ballFlag = !this.ballFlag
    }
  },
  created () {
    this.getLunbotu()
    this.getGoodsInfo()
  },
  mounted () {
    console.log(this)
  },
  components: {
    swiper,
    numbox
  }
}
</script>

<style lang="stylus" scoped>
.goodsinfo-container
  background-color: #eee
  overflow: hidden
  .now_pirce
    color: red
    font-size: 16px
    font-weight: bold
  .mui-card-footer
    display: block
    button
      margin: 10px 0
  .ball
    width: 15px
    height: 15px
    border-radius: 50%
    background-color: red
    position: absolute
    z-index: 9999
    top: 330px
    left: 140px
</style>
