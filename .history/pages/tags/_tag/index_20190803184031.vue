<template lang="pug">
v-layout(wrap).tag-list
    v-flex(
      tag="section"
      class="section-item"
      md6
      xs11
      wrap
    )
      v-card(
        color="transparent"
        flat
      )
        // Title
        v-card-title.section-item-title
          v-flex(tag="span")
            v-icon(
              class="mb-1"
              color="primary"
              size="30"
              left
            )
              | fas fa-feather-alt
            | 《{{$route.params.tag}}》的最新文章
        article-list(:init-data="articles",:init-count="totalCount")
    //- // Infinite loading
    //- v-infinite-loading()
</template>
<script>
import articleListItem from "@/components/ui/article/ListItem.vue";
import ArticleList from "@/components/ui/article/List.vue";

import axios from "axios";
export default {
  components: {
    "article-list-item": articleListItem,
    "article-list": ArticleList
  },
  data() {
    return {
      articles: [],
      totalCount: {}
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
.section
  margin 48px auto 24px auto
  &-item
    margin 0 auto 40px auto
    &:last-child
      margin-bottom 0
    &-title
      font-size 34px
      font-weight 700
      text-align center
      padding 20px
.tag-list
  text-align center
  margin auto
  width 70%
  >>>.post
    padding 24px
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
