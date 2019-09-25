<template lang="pug">
  // Items
  v-layout(class="post-list" wrap)
    v-flex(
      v-for="(article, index) in articles"
      :key="index"
      class="post-list-item"
      md12
      wrap
    )
        article-list-item(:article="article",v-if="article._id")
        ins(v-else,class="adsbygoogle",style="display:block"
            data-ad-client="ca-pub-3126519013117675"
            data-ad-slot="2262849458"
            data-ad-format="auto"
            data-full-width-responsive="true")
    // Actions
    v-flex(
      v-show="isHaveMore"
      class="post-list-action text-xs-center"
      my-3
      wrap
    )
      button(
        v-show="!loading&&loadingShow"
        class="fetch-button"
        @click="fetchNext"
      )
        v-icon(color="accent")
          | fas fa-plus

      v-icon(
        v-show="loading&&loadingShow"
        class="fetch-icon"
        color="accent"
        size="48"
      )
        | far fa-snowflake fa-spin
</template>

<script>
import articleListItem from "./ListItem.vue";
export default {
  watch: {
    initData() {
      this.updata()
    }
  },
  props: {
    initData: {
      type: Array
    },
    loadingShow:{
      type:Boolean,
      default:true
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
    updata() {
      this.articles = this.initData.map(item => {
        // item.tag = item.tag.map(item1 => {
        //   return {
        //     name: item1,
        //     to: `/tag/${item1}`
        //   };
        // });
        return item;
      });
      this.articles.splice(3,0,{})
      console.log(this.articles)
    },
    fetchNext(){

    }
  },
  created() {
    this.updata()
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.post-list {
  // Item
  &-item {
    padding: 0 8px;

    // margin 6px 0 36px 0
    +screen-width-less-than(sm) {
      padding: 0;
    }
  }

  // Actions
  &-action {
    // Button
    .fetch-button {
      margin: 12px 0;
      width: 97px;
      height: 60px;
      border: 1px solid var(--v-secondary-darken1);
      outline: none;
      background: transparent;
      transition: box-shadow 0.3s;

      .v-icon::before {
        transition: transform 0.3s;
      }

      &:hover {
        box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);

        .v-icon::before {
          transform: rotate(90deg);
        }
      }
    }

    // Icon
    .fetch-icon {
      margin: 18px 24px;
    }
  }
}
</style>
