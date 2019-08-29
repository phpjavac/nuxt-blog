<template lang="pug">
v-flex(
    tag="section"
    class="section-item"
    md6
    xs11
    wrap
  )
    v-card.archives-card
      // Title
      v-flex(class="archives-card-title" wrap)  敬业日历
      the-calendar
</template>

<script>
import axios from "axios";
export default {
  components: {
    TheCalendar: () => import("@/components/ui/chart/TheCalendar.vue")
  },
  data() {
    return {
      list: []
    };
  },
  async asyncData() {
    const { data } = await axios.get("http://localhost:3003/api/tool/workingday", {
      params: {
        Startdate: "2019-01-01",
        enddate: "2019-12-31",
        code: "sunfucong",
        state: "Resolved, Closed"
      }
    });
    return { list: data };
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.section-item
  margin 48px auto 24px auto
  // archives card
  .archives-card
    padding 30px
    margin-bottom 60px
    +screen-width-less-than(sm)
      padding 30px 12px
    &-title
      font-size 24px
      font-weight 700
      text-align center
      margin-bottom 8px
      .v-icon
        color var(--v-primary-base)
        margin 0 8px 4px 0
</style>
