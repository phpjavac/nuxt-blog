<template lang="pug">
v-layout(wrap).tag-list
  v-flex(
    tag="section"
    class="section-item"
    md12
    wrap
  )
    // Article list
    v-layout(class="post-list" wrap)
      v-flex(
        v-for="(article, index) in articles"
        :key="index"
        class="post-list-item"
        md12
        xs11
        wrap
      )
        article-list-item(:article="article")

    //- // Infinite loading
    //- v-infinite-loading()
</template>
<script>
import articleListItem from "@/components/ui/article/ListItem.vue";
import axios from "axios";
export default {
  components: {
    "article-list-item": articleListItem
  },
  data() {
    return {
      articles: []
    };
  },
  async asyncData(con) {
    let { data } = await axios.get(
      "http://localhost:3003/api/article/list/tag",
      {
        params: {
          tag: con.params.tag
        }
      }
    );
    return { articles: data.data.list };
  },
  created() {}
};
</script>



<style scoped lang="stylus" rel="stylesheet/stylus">
.tag-list
  text-align center
  margin auto
  width 70%
  >>>.post
      padding: 24px;
.section-item
  margin 48px auto 24px auto
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
