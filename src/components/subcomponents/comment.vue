<template>
  <div class="cmt-content">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论内容(最多120字)"
              maxlength="120"
              v-model="text"></textarea>
    <mt-button type="primary"
               size='large'
               @click='addComment'>提交评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item"
           v-for="(item,i) in comments"
           :key='item.id'>
        <div class="cmt-title">
          <span>第{{i+1}}楼 用户 :{{item.user_name}}</span>
          <span>发表时间:{{item.add_time |dateFormat}}</span>
        </div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger"
               size='large'
               plain
               @click='moreComment'>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
      pageIndex: 1,
      comments: [],
      text: ''
    }
  },
  methods: {
    getComments () {
      // console.log(this.pageIndex)
      this.$ajax.get('api/getcomments/' + this.artid + '?pageindex=' + this.pageIndex)
        .then(res => {
          this.comments = this.comments.concat(res.data.message)
        })
    },
    addComment () {
      if (this.text.trim() === '') {
        return
      }
      this.$ajax.post('api/postcomment/' + this.artid, { content: this.text })
        .then(res => {
          let newcomment = {
            user_name: '匿名用户',
            add_time: Date.now(),
            content: this.text.trim()
          }
          this.comments.unshift(newcomment)
          this.text = ''
          this.$toast({
            message: res.data.message,
            position: 'middle',
            duration: 500
          })
        })
    },
    moreComment () {
      this.pageIndex++
      this.getComments()
    }
  },
  created () {
    this.getComments()
  },
  props: ['artid']
}
</script>

<style lang="stylus" scoped>
.cmt-content
  h3
    font-size: 18px
  textarea
    font-size: 14px
    height: 85px
    margin: 0
  .cmt-list
    margin: 5px 0
    .cmt-item
      font-size: 13px
      .cmt-title
        line-height: 30px
        background-color: #ccc
        display: flex
        justify-content: space-between
      .cmt-body
        line-height: 35px
        text-indent: 2em
</style>
