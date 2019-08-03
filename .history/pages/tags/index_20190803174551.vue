<template lang="pug">
  v-flex(
    tag="section"
    class="section-item"
    md6
    xs11
    wrap
  )
    // Tag list
    v-card.tag-card
      // Title
      v-flex(class="tag-card-title" wrap)
        v-icon(size="20") fas fa-tags
        | 文章标签

      // Tags
      v-flex(class="tag-card-content" warp)
        v-badge(
          v-for="(tag, index) in tagsList"
          :key="index"
          color="accent lighten-1"
        )
          template
            span {{ tag.value }}
          v-chip(
            class="tag-label elevation-3"
            label
          )
            n-link(
            :to="`tags/${tag.name}`"
              exact
            )
              | {{ tag.name }}

    // Chart
    v-card()
      //- the-bar(:data="tags")
</template>
<script>
import axios from 'axios'
export default {
    async asyncData () {
    let { data } = await axios.get("http://localhost:3003/api/article/taglist")
    return { tagsList: data.list }
  },
  data() {
    return {
      tagsList: []
    };
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.section-item {
  margin: 48px auto 24px auto;

  // Tag card
  .tag-card {
    padding: 30px;
    margin-bottom: 60px;

    +screen-width-less-than(sm) {
      padding: 30px 12px;
    }

    &-title {
      font-size: 24px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 8px;

      .v-icon {
        color: var(--v-primary-base);
        margin: 0 8px 4px 0;
      }
    }

    &-content {
      text-align: center;
      padding: 8px 30px;

      +screen-width-less-than(sm) {
        padding: 12px 0;
      }

      .tag-label {
        font-size: 1rem;
        margin: 10px;
        transition: all 0.3s;

        &:hover {
          color: #FFF !important;
          background: #e8676b !important;
        }

        >>> .v-chip__content {
          cursor: pointer;
        }
      }

      .v-badge >>> .v-badge__badge {
        top: 2px;
        right: 2px;
      }
    }
  }
}
</style>
