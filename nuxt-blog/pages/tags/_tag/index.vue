<template lang="pug">
  v-flex(
    tag="section"
    class="section-item"
    md6
    wrap
  )
    //- // Article list
    //- v-layout(class="post-list" wrap)
    //-   v-flex(
    //-     v-for="(article, index) in articles"
    //-     :key="index"
    //-     class="post-list-item"
    //-     md6
    //-     xs11
    //-     wrap
    //-   )
    //-     article-list-item(:article="article")

    //- // Infinite loading
    //- v-infinite-loading()
</template>



<style scoped lang="stylus" rel="stylesheet/stylus">
.section-item
  margin: 48px auto 24px auto
.post-list
  +screen-width-less-than(md)
    justify-content center
  // Item
  &-item
    padding 0 8px
    margin-bottom 40px
    +screen-width-less-than(sm)
      padding 0
</style>
