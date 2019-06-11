<template>
  <div>
    <cmtbox :artid="$route.params.id"></cmtbox>
  </div>
</template>

<script>
import cmtbox from '../subcomponents/comment'
export default {
  components: {
    cmtbox
  }
}
</script>

<style lang="stylus" scoped></style>
