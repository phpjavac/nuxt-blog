<template lang="pug">
div.flex.article-home.md6.xs11.wrap
    h1.title {{title}}
    div(v-html="content").markdown-body
</template>
<script>
export default {
  data() {
    return {
      content: {},
      title: ""
    };
  },
  async asyncData(route) {
    let { data } = await route.app.$axios.get("/api/article", {
      params: {
        id: route.params.id
      }
    });
    return { content: data.data.content, title: data.data.title };
  },
  created() {
    
  },
};
</script>
<style lang="stylus">
.article-home {
  margin: 0 auto 40px auto;

  .title {
    font-size: 34px !important;
    margin-bottom: 120px;
    color: #fff;
    border-bottom: 2px solid #fff0;
    padding-bottom 3px
    &:after {
      content: '';
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s ease, background-color 0.5s ease;
    }

    &:hover:after {
      width: 100%;
      background: #fff;
    }
  }

  code {
    box-shadow: none;
  }
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>