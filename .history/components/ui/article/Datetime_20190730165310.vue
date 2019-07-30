<template lang="pug">
  v-tooltip(top)
    // Datetime
    template(#activator="{ on }")
      v-card(
        tag="time"
        :datetime="datetime"
        class="post-datetime text-xs-center white--text pa-2"
        width="58"
        height="58"
        color="accent"
        tile
        flat
        v-on="on"
      )
        // Day
        v-flex(
          tag="span"
          class="day font-weight-bold"
        )
        //-   | {{ postDate.date() }}

        // Month
        v-flex(
          tag="span"
          class="month font-weight-bold"
        )
        //-   | {{ postMonth }}

    // Tooltip
    //- span {{ postDate.toDate() }}
</template>


<style scoped lang="stylus" rel="stylesheet/stylus">
.post-datetime
  & span
    display block
    height 18px
    line-height 18px
  & .day
    font-size 19px
    margin 2px 0 2px 0
  & .month
    font-size 12px
</style>