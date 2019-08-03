<template lang="pug">
  // Items
  v-layout(class="post-list" wrap)
    v-flex(
      v-for="(article, index) in articles"
      :key="index"
      class="post-list-item"
<<<<<<< HEAD
      md12
      wrap
    )
        article-list-item(:article="article")
=======
      md6
      wrap
    )
        article-list-item(:article="article")

>>>>>>> c11345e2f3f09b22a9a7715e5b5c6388c62a02e2
    // Actions
    v-flex(
      v-show="isHaveMore"
      class="post-list-action text-xs-center"
      my-3
      wrap
    )
      button(
        v-show="!loading"
        class="fetch-button"
        @click="fetchNext"
      )
        v-icon(color="accent")
          | fas fa-plus

      v-icon(
        v-show="loading"
        class="fetch-icon"
        color="accent"
        size="48"
      )
        | far fa-snowflake fa-spin
</template>

<script>
import articleListItem from "./ListItem.vue";
export default {
  props: {
    initData: {
      type: Array
    }
    // totalCount:Object
  },
  components: {
    "article-list-item": articleListItem
  },
  data() {
    return {
      isHaveMore: true,
      loading: false,
      articles: []
    };
  },
  methods: {
    fetchNext() {}
  },
  created() {
    this.articles = this.initData.map(item => {
      console.log(item)
      // item.tag = item.tag.map(item1 => {
      //   return {
      //     name: item1,
      //     to: `/tag/${item1}`
      //   };
      // });
      return item;
    });
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.post-list
  // Item
  &-item
    padding 0 8px
    // margin 6px 0 36px 0
    +screen-width-less-than(sm)
      padding 0
  // Actions
  &-action
    // Button
    .fetch-button
      margin 12px 0
      width 97px
      height 60px
      border 1px solid var(--v-secondary-darken1)
      outline none
      background transparent
      transition box-shadow 0.3s
      .v-icon::before
        transition transform 0.3s
      &:hover
        box-shadow 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)
        .v-icon::before
          transform rotate(90deg)
    // Icon
    .fetch-icon
      margin 18px 24px
</style>
