<template>
  <div class="shopcarContainer">
    <div class="goos-list"
         v-for="(item,i) in shopcarList"
         :key="item.id">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                       @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">¥{{item.sell_price}}</span>
                <numbox :initCount="$store.getters.getGoodsCount[item.id]"
                        :goodsid="item.id"></numbox>
                <a href="#"
                   @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>已勾选商品
              <span class="red">{{$store.getters.getSelectedCountAndAmount.count}}</span> 件,总价
              <span class="red">¥{{$store.getters.getSelectedCountAndAmount.amount}}</span>
            </p>
          </div>
          <mt-button type='danger'>去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox'
export default {
  name: 'ShopcarContainer',
  data () {
    return {
      shopcarList: []
    }
  },
  methods: {
    getShopCarList () {
      let idArr = []
      this.$store.state.car.forEach(item => idArr.push(item.id))
      if (idArr.length <= 0) { return }
      this.$ajax.get('api/goods/getshopcarList/' + idArr.join(','))
        .then(res => {
          if (res.data.status === 0) {
            this.shopcarList = res.data.message
          }
        })
    },
    remove (id, i) {
      this.shopcarList.splice(i, 1)
      this.$store.commit('removeFormCar', id)
    },
    selectedChanged (id, val) {
      this.$store.commit('updateGoodsSelected', { id, val })
    }
  },
  created () {
    this.getShopCarList()
  },
  components: {
    numbox
  }
}
</script>

<style lang="stylus" scoped>
.shopcarContainer
  background-color: #eee
  overflow: hidden
  .goos-list
    img
      width: 76px
      height: 60px
      padding: 0 8px
    h1
      font-size: 13px
      padding-bottom: 5px
    .info
      display: flex
      flex-direction: column
      justify-content: space-between
      .price
        color: red
        font-weight: bold
    .mui-card-content-inner
      display: flex
      align-items: center
      padding: 5px
  .jiesuan
    display: flex
    justify-content: space-between
    align-items: center
    .red
      color: red
      font-weight: bold
      font-size: 16px
</style>
