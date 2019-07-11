<template lang="pug">
  v-footer(id="footer" height="auto")
    v-card(color="transparent" width="100%" flat tile)
      v-card-text.footer-text
        | {{ `&copy;&nbsp;${year}&nbsp;` }}
        a(href="https://aiisx.com/" target="_blank")
          | AIisx
</template>

<script>
import dayjs, { Dayjs } from "dayjs";
export default {
  data() {
    return {
      year: dayjs().year() > 2019 ? `2019-${dayjs().year()}` : "2019"
    };
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#footer
  background-color transparent
  .footer-text
    text-align center
    padding 8px 0 24px 0
    font-size 12px
    color #a0a0a0
    a
      color #a0a0a0
      &:hover
        text-decoration underline
</style>
