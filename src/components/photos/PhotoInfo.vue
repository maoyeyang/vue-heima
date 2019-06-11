<template>
  <div class="photoinfo-container">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoInfo.add_time | dateFormat}}</span>
      <span>点击:{{photoInfo.click}}次</span>
    </p>
    <hr>
    <vue-preview :list="list"
                 :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
                 :previewBoxStyle="{border: '1px solid #eee'}"
                 :tapToClose="true"
                 @close="closeHandler"
                 @destroy="destroyHandler" />
    <div class="content"
         v-html="photoInfo.content"></div>
    <cmt-box :artid="id"></cmt-box>
  </div>
</template>

<script>
import comment from '../subcomponents/comment'
export default {
  name: 'PhotoInfo',
  data () {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      list: []
    }
  },
  methods: {
    getPhotoInfo () {
      this.$ajax.get('api/getimageInfo/' + this.id)
        .then(res => {
          if (res.data.status === 0) {
            this.photoInfo = res.data.message[0]
          }
        })
    },
    getThumbs () {
      this.$ajax.get('api/getthumimages/' + this.id)
        .then(res => {
          if (res.data.status === 0) {
            res.data.message.forEach(item => {
              item.w = 600
              item.h = 500
              item.alt = 'picture1'
              item.title = 'Image Caption 1'
              item.msrc = item.src
            })
            this.list = res.data.message
          }
        })
    },
    closeHandler () {
      console.log('closeHandler')
    },
    destroyHandler () {
      console.log('destroyHandler')
    }
  },
  created () {
    this.getPhotoInfo()
    this.getThumbs()
  },
  components: {
    'cmt-box': comment
  }
}
</script>

<style lang="stylus" scoped>
.photoinfo-container
  padding: 3px
  h3
    color: #26a2ff
    text-align: center
    font-size: 15px
    margin: 15px 0
  .subtitle
    display: flex
    justify-content: space-between
    font-size: 13px
  .content
    font-size: 13px
    padding-bottom: 20px
</style>
