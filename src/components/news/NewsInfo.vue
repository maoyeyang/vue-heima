<template>
  <div class="newsinfo-container">
    <h1 class="title">{{newsinfo.title}}</h1>
    <p class="subtitle">
      <span>发表时间:{{newsinfo.time}}</span>
      <span>点击:{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content"
         v-html="newsinfo.content">
    </div>
    <comment-box :artid='id'></comment-box>
  </div>
</template>

<script>
import comment from '../subcomponents/comment'

export default {
  name: 'NewsInfo',
  data () {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    }
  },
  methods: {
    getNewsInfo () {
      this.$ajax.get('news/getnewsinfo/' + this.id).then(response => {
        this.newsinfo = response.data.data
      })
    }
  },
  created () {
    this.getNewsInfo()
  },
  components: {
    'comment-box': comment
  }
}
</script>

<style lang="stylus" scoped>
.newsinfo-container
  padding: 0 4px
  .title
    font-size: 16px
    text-align: center
    margin: 15px 0
    color: red
  .subtitle
    font-size: 13px
    color: #226aff
    display: flex
    justify-content: space-between
  .content
    font-size: 13px
    text-indent: 2em
</style>
