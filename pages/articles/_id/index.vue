<template lang="pug">
div.flex.article-home.md6.xs11.wrap
    div(v-html="content")
</template>
<script>
import "mavon-editor/dist/css/index.css"
import axios from "axios";
export default {
  data() {
    return {
      content: {}
    };
  },
  async asyncData(route) {
    let { data } = await axios.get("http://localhost:3003/api/article", {
      params: {
        id: route.params.id
      }
    });
    return { content: data.data.content };
  }
};
</script>
<style lang="stylus">
.article-home
    margin: 0 auto 40px auto;
</style>