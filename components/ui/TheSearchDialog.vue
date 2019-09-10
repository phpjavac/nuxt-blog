<template lang="pug">
  v-dialog(
    v-model="show"
    max-width="85%"
    lazy
  )
    v-card#search-card
      // Search form
      v-card-title#search-form
        v-text-field(
          id="search-input"
          v-model.trim="keywords"
          label="TITLE"
          :loading="loading"
          prepend-inner-icon="fas fa-search"
          single-line
          color="accent"
          type="search"
          autofocus
        )

      // Search result
      v-card-text#search-result
        article-list(:init-data="searchResult",:loadingShow="false")
        // Search result stats
        // v-flex#search-result-stats(wrap)

        // // Search result list
        // v-container#search-result-list.scroll-y
        //   v-layout.list-container(column wrap)
        //     // List item
        //     v-flex.list-item(
        //       v-for="article in searchResult"
        //       :key="article.id"
        //       wrap
        //     )
        //       // Item title
        //       span.list-item-title(
        //         @click="transiTo(article.id)"
        //       )
        //         | {{ article.title }}

        //       // Item detail
        //       v-flex.list-item-detail(wrap)
        //         // Post date
        //         time.post-date(:datetime="article.created_at")
        //           //- | {{ $d(new Date(article.created_at), 'short', $i18n.locale) }}

        //         // Tags
        //         span 标签

        //         n-link.tags(
        //           v-for="(tag, index) in article.tags"
        //           :key="index"
        //           to="/"
        //         )
        //           | {{ tag }}

        //       // Content
        //       v-flex.list-item-content(
        //         v-html="article.content"
        //         wrap
        //       )

        //       v-divider.mt-3.mr-1
</template>
<script>
import axios from "axios";
import ArticleList from "@/components/ui/article/List.vue";

export default {
  components: {
    "article-list": ArticleList
  },
  computed: {
    SearchDialogState() {
      return this.$store.state.SearchDialogState;
    }
  },
  data() {
    return {
      show: this.SearchDialogState,
      loading: false,
      keywords: "",
      searchResult: [],
      timeout: null
    };
  },
  watch: {
    show(){
      if(!this.show&&this.SearchDialogState){
        this.keywords = ""
        this.searchResult = []
        this.$store.commit("showSearchDialogState");
      }
    },
    SearchDialogState() {
      this.show = this.SearchDialogState
    },
    keywords() {
      this.debounce(this.textChange(this.keywords), 1000);
    }
  },
  methods: {
    debounce(func, wait) {
      return function() {
        let context = this;
        let args = arguments;

        if (this.timeout) clearTimeout(this.timeout);

        let callNow = !this.timeout;
        this.timeout = setTimeout(() => {
          this.timeout = null;
        }, wait);

        if (callNow) func.apply(context, args);
      };
    },
    textChange(name) {
      if (!name) {
        return (this.searchResult = []);
      }
      this.loading = true;
      axios
        .get("http://localhost:3003/api/article/list", {
          params: {
            title: name,
            pageSize: 200
          }
        })
        .then(res => {
          this.loading = false;
          this.searchResult = res.data.data.list;
        });
    },
    transiTo() {}
  }
};
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
#search-card {
  padding: 24px 60px 48px 60px;

  +screen-width-less-than(sm) {
    padding: 0 16px 12px 16px;
  }

  #search-form {
    padding: 0;

    >>> .v-input__icon .v-icon {
      font-size: 18px;
    }
  }

  #search-result {
    padding: 0;
    height: 500px;
    overflow: auto;

    #search-result-stats {
      margin-bottom: 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--v-secondary-darken3);
    }

    #search-result-list {
      padding: 0;
      max-height: 100%;

      .list-container .list-item {
        margin: 8px 0;
      }

      .list-item {
        &-title {
          display: inline-block;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 4px;
          cursor: pointer;
          transition: color 0.15s linear 0s;

          &:hover {
            color: var(--v-accent-base);
          }
        }

        &-detail {
          font-size: 12px;
          color: var(--v-secondary-darken3);
          margin-bottom: 4px;

          .post-date {
            margin-right: 12px;
          }

          .tags {
            margin-right: 8px;
            color: var(--v-secondary-darken3);
            text-decoration: underline;

            &:last-child {
              margin-right: 0;
            }

            &:hover {
              color: var(--v-accent-base);
            }
          }
        }

        &-content {
          font-size: 14px;

          >>> .search-keyword {
            padding: 1px 4px 1px 2px;
            font-size: 0.9em;
            font-weight: 500;
            color: var(--v-accent-base);
            background-color: var(--v-secondary-lighten1);
          }
        }
      }
    }
  }
}
</style>
