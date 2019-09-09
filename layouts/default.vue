<template lang='pug'>
v-app
  // Header
  the-header(:didScroll="false")
  TheSearchDialog
  v-content
    nuxt
    // Footer
  the-footer
</template>
<script>
export default {
  components: {
    TheHeader: () => import("@/components/layout/TheHeader.vue"),
    TheSearchDialog: () => import('@/components/ui/TheSearchDialog.vue'),
    TheFooter: () => import("@/components/layout/TheFooter.vue")
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
#progress-page-scroll
  position fixed
  bottom 0
::-webkit-scrollbar
  width 6px
  background-color transparent
::-webkit-scrollbar-track
  background-color transparent
::-webkit-scrollbar-thumb
  background-color grey
  border-radius 100px
body
  background: #d7d7d7;
</style>