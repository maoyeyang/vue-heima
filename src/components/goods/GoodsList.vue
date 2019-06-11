<template>
  <div class="goods-list">
    <router-link class="goods-item"
                 v-for="(item,i) in goodslist"
                 :key="i"
                 :to="'/home/goodsinfo/'+item.id"
                 tag="div">
      <img :src="item.img_url">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥{{item.sell_price}}</span>
          <span class="old">¥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>
    <mt-button type="danger"
               size='large'
               plain
               @click='moreGoods'>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      goodslist: [],
      pageindex: 1
    }
  },
  methods: {
    getGoodsList () {
      this.$ajax.get('api/getgoods?pageindex' + this.pageindex).then(res => {
        if (res.data.status === 0) {
          this.goodslist = this.goodslist.concat(res.data.message)
        }
      })
    },
    moreGoods () {
      this.pageindex++
      this.getGoodsList()
    }
  },
  created () {
    this.getGoodsList()
  }
}
</script>

<style lang="stylus" scoped>
.goods-list
  display: flex
  flex-wrap: wrap
  padding: 7px
  justify-content: space-between
  .goods-item
    width: 49%
    border: 1px solid #ccc
    box-shadow: 0 0 8px #ccc
    margin: 4px 0
    padding: 2px
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: 270px
    img
      width: 100%
    .title
      font-size: 14px
    .info
      background-color: #eee
      p
        padding: 5px
        margin: 0
      .price
        .now
          color: red
          font-weight: bold
          font-size: 16px
        .old
          text-decoration: line-through
          font-size: 12px
          margin-left: 10px
      .sell
        display: flex
        justify-content: space-between
        font-size: 13px
</style>
