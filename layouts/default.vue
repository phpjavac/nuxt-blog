<template lang='pug'>
v-app
  // Header
  the-header(:didScroll="false")
  v-content
    nuxt
</template>
<script>
export default {
    components: {
    TheHeader: () => import('@/components/layout/TheHeader.vue')
  },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
body
  margin 0
#progress-page-scroll
  position fixed
  bottom 0
</style>