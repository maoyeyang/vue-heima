<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for='item in lunbotuList'
                     :key='item.id'>
        <img :src="item.img"
             :class="{'full':isFull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['lunbotuList', 'isFull']
}
</script>

<style lang="stylus" scoped>
.mint-swipe
  height: 120px
  .mint-swipe-item
    text-align: center
    &:nth-child(1)
      background-color: #fff
    &:nth-child(2)
      background-color: #fff
    &:nth-child(3)
      background-color: #fff
    .full
      width: 100%
      height: 100%
    img
      height: 100%
</style>
