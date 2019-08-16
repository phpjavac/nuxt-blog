<template lang="pug">
  article(data-aos="fade-up")
    v-card.post
      v-card-title.post-image
      // Content
      v-card-text.post-content
        // Datetime
        //- post-date-time(:datetime="article.created_at")
        // Title
        v-flex(class="post-content-title" wrap)
          n-link(
          :to="`/articles/${article._id}`"
            exact
          )
            | {{ article.title }}
        v-flex(class="post-content-summary" wrap)
          n-link(
          :to="`/articles/${article._id}`"
            exact
          )
            | {{ article.summary }}
    
        // Tags
        v-flex(class="post-content-tag" wrap)
          n-link(
            v-for="(tag, index) in article.tag"
            :to="`/tags/${tag}`"
            :key="index"
          )
            | {{ tag }}
          time.time {{getDate(+article.time)}}
</template>
<script>
export default {
  props: {
    article: {
      type: Object
    }
  },
  methods: {
    getDate(date) {
      const now = new Date(date);
      const yy = now.getFullYear(); //年
      const mm = now.getMonth() + 1; //月
      const dd = now.getDate(); //日
      const hh = now.getHours(); //时
      const ii = now.getMinutes(); //分
      const ss = now.getSeconds(); //秒
      let clock = yy + "-";
      if (mm < 10) clock += "0";
      clock += mm + "-";
      if (dd < 10) clock += "0";
      clock += dd + " ";
      if (hh < 10) clock += "0";
      clock += hh + ":";
      if (ii < 10) clock += "0";
      clock += ii + ":";
      if (ss < 10) clock += "0";
      clock += ss;
      return clock;
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.post
  position relative
  text-align left
  transition border-bottom 0.15s linear 0s
  box-shadow none
  border-bottom 1px solid #dddddd00
  &:hover
    border-bottom 1px solid #dddddd
  // Link
  a:hover
    text-decoration underline
  // Image
  // Detail
  &-content
    padding 25px 0 35px 0
    &-summary
      font-size 1.6em
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 3
      overflow hidden
    // Tag
    &-tag
      font-size 14px
      margin-top 24px
      a
        // margin-right 8px
        color var(--v-secondary-darken2)
        padding 2px 7px
        // color: white;
        text-decoration none
        border-radius 5px
        font-size 1em
        margin-right 3px
        color #9EABB3
        border #E3E9ED 1px solid
        &:last-child
          margin-right 0
      .time
        display inline-block
        padding-left 12px
        border-left #d5dbde 1px solid
        text-transform uppercase
        font-size 1em
        white-space nowrap
        color #9EABB3
    &-title
      font-size 36px
      font-weight 700
      margin-bottom 25px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
</style>
