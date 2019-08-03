<template lang="pug">
<<<<<<< HEAD
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
=======
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
>>>>>>> c11345e2f3f09b22a9a7715e5b5c6388c62a02e2

    //- // Infinite loading
    //- v-infinite-loading()
</template>
<<<<<<< HEAD
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
=======
>>>>>>> c11345e2f3f09b22a9a7715e5b5c6388c62a02e2



<style scoped lang="stylus" rel="stylesheet/stylus">
<<<<<<< HEAD
.tag-list
  text-align center
  margin auto
  width 70%
  >>>.post
      padding: 24px;
.section-item
  margin 48px auto 24px auto
=======
.section-item
  margin: 48px auto 24px auto
>>>>>>> c11345e2f3f09b22a9a7715e5b5c6388c62a02e2
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
