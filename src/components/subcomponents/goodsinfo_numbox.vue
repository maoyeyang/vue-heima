<template>
  <div class="mui-numbox"
       data-numbox-min='1'
       :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus"
            type="button">-</button>
    <input id="test"
           class="mui-input-numbox"
           type="number"
           value='1'
           @change="countChanged"
           ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus"
            type="button">+</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['max'],
  methods: {
    countChanged () {
      this.$emit('getcount', parseInt(this.$refs.numbox.value))
    }
  },
  mounted () {
    this.mui('.mui-numbox').numbox()
  },
  watch: {
    'max': function (newVal, oldVal) {
      this.mui('.mui-numbox').numbox().setOption('max', newVal)
    }
  }
}
</script>

<style lang="stylus" scoped></style>
