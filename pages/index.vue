<template lang="pug">
  v-flex(class="section" wrap)
    // Today
    v-flex(
      tag="section"
      class="today section-item"
      md4
      xs11
      wrap
    )
      v-card(class="today-card")
        // Season
        v-flex(
          class="today-title text-xs-center"
          py-3
          wrap
        )
          span.display-2
            | {{ season.locale }}

          span.mx-2
            | &middot;

          span.title
            |{{ season.word }}

        // Date
        v-layout(class="today-date" wrap)
          // Day
          v-flex(class="day display-4" xs6)
            | {{ now.date() }}

          // Weekday
          v-flex(class="month-weekday" xs6 wrap)
            span.weekday.display-1
              | 星期{{date[now.day()-1]}}

            span.month.title
              | {{`${now.year()}年${now.month()+1}月`}}

        // Poem
        v-flex(
          class="today-poem"
          py-3
          wrap
        )
          | {{ season.poem }}

    // Articles
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
            | 最新文章

        article-list(:init-data="articles",:init-count="totalCount")
        no-ssr
          vueToTop(:bottom="50")
</template>
<script>
import ArticleList from "@/components/ui/article/List.vue";
import dayjs, { Dayjs } from "dayjs";
export default {
  components: {
    "article-list": ArticleList
  },
  data() {
    return {
      articles: [],
      totalCount: {},
      now: dayjs(),
      date: ["一", "二", "三", "四", "五", "六", "天"]
    };
  },
    head () {
        return {
            title: "yiziluoying"
        }
    },
  async asyncData(con) {
    let { data } = await con.app.$axios.get("/api/article/list", {
      params: { page: 1, pageSize: 10 }
    });
    return { articles: data.data.list,totalCount:data };
  },
  computed: {
    season() {
      const month = this.now.month() + 1;
      // Spring
      if (month >= 3 && month <= 5) {
        return {
          word: "Spring",
          locale: "春",
          poem: "《春夜喜雨》- 好雨知時節，當春乃発生。"
        };
      }

      // Summer
      if (month >= 6 && month <= 8) {
        return {
          word: "Summer",
          locale: "夏",
          poem: "《小池》- 小荷才露尖尖角，早有蜻蜓立上頭。"
        };
      }

      // Autumn
      if (month >= 9 && month <= 11) {
        return {
          word: "Autumn",
          locale: "秋",
          poem: "《水調歌頭》- 但願人長久，千里共嬋娟。"
        };
      }

      // Winter
      return {
        word: "Winter",
        locale: "冬",
        poem: "《江雪》- 孤舟蓑笠翁，独釣寒江雪。"
      };
    }
  }
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
  // Today card
  .today
    &-card
      padding 16px
      box-shadow 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)
    &-title
      color #a0a0a0
      &::before, &::after
        content ''
        vertical-align middle
        display inline-block
        width 14%
        margin 0 4% 4% 4%
        border 1px solid #a0a0a0
    &-date
      margin-bottom 8px
      .day
        color #e8676b
        font-weight 500
        text-align right
        padding-right 20px
      .month-weekday
        text-align left
        padding-left 20px
        .weekday, .month
          display block
          margin 16px 0
    &-poem
      color #a0a0a0
      text-align center
      font-style italic
</style>
