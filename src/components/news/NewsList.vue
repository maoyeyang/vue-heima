<template>
  <div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media"
          v-for="(item) in newlist"
          :key="item.id">
        <router-link class="mui-navigate-right"
                     :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left"
               :src="require('../../assets/images/cbd.jpg')">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间 : {{item.time}} </span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data () {
    return {
      newlist: []
    }
  },
  methods: {
    getNewList () {
      this.$ajax
        .get('news/getnewslist')
        .then(response => {
          this.newlist = response.data.data
        })
    }
  },
  created () {
    this.getNewList()
  }
}
</script>

<style lang="stylus" scoped>
.mui-table-view
  li
    h1
      font-size: 14px
    .mui-ellipsis
      font-size: 12px
      color: #226aff
      display: flex
      justify-content: space-between
    a
      padding-right: 45px
</style>
