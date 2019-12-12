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
      v-flex(class="archives-card-title" wrap,@click="()=>{state+=1}")  敬业日历
      the-calendar(:list="list",:state="state")
</template>

<script>
export default {
  components: {
    TheCalendar: () => import("@/components/ui/chart/TheCalendar.vue")
  },
  data() {
    return {
      list: [],
      state: 0
    };
  },
  head() {
    return {
      title: "敬业日历"
    };
  },
  async asyncData(con) {
    const { data } = await con.app.$axios.get("/api/tool/getworkingHours");
    return { list: data.data };
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
      cursor pointer
      .v-icon
        color var(--v-primary-base)
        margin 0 8px 4px 0
</style>
