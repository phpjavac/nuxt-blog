<template lang='pug'>
v-app
  // Header
  the-header(:didScroll="false")
  v-content
    nuxt
    // Footer
  the-footer
</template>
<script>
export default {
  components: {
    TheHeader: () => import("@/components/layout/TheHeader.vue"),
    TheFooter: () => import("@/components/layout/TheFooter.vue")
  },
  data() {
    return {
      get: null
    };
  },
  methods: {
    gettest1() {
      return {
        get: this.get
      };
    }
  },
  computed: {
    gettest() {
      return {
        get: this.get
      };
    }
  },
  created() {
    setInterval(() => {
      this.get = 1;
    }, 1000);
    setInterval(() => {
      this.get = 2;
    }, 2000);
    setInterval(() => {
      console.log(this.gettest, this.gettest1())
    }, 500);
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
#progress-page-scroll
  position fixed
  bottom 0
::-webkit-scrollbar
  width 6px
  background-color transparent
::-webkit-scrollbar-track
  background-color transparent
::-webkit-scrollbar-thumb
  background-color grey
  border-radius 100px
</style>