<template>
  <div class="goodsdesc-container">
    <h3>{{info.title}}</h3>
    <hr>
    <div class="content"
         v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {}
    }
  },
  methods: {
    getGoodsDesc () {
      this.$ajax.get('api/goods/getdesc/' + this.$route.params.id)
        .then(res => {
          if (res.data.status === 0) {
            this.info = res.data.message[0]
          }
        })
    }
  },
  created () {
    this.getGoodsDesc()
  }
}
</script>

<style lang="stylus">
.goodsdesc-container
  padding: 0 4px
  h3
    font-size: 16px
    color: #226aff
    text-align: center
    margin: 15px 0
  .content
    img
      width: 100%
</style>
