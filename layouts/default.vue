<template lang='pug'>
v-app
  // Header
  the-header(:didScroll="didScroll")
  TheSearchDialog
  v-content
    nuxt
    // Footer
  the-footer
</template>
<script>
import throttle from 'lodash/throttle';
export default {
  components: {
    TheHeader: () => import("@/components/layout/TheHeader.vue"),
    TheSearchDialog: () => import("@/components/ui/TheSearchDialog.vue"),
    TheFooter: () => import("@/components/layout/TheFooter.vue")
  },
  data() {
    return {
      didScroll: false
    };
  },
  mounted() {
    // Listen page scroll and resize event
    document.addEventListener(
      "scroll",
      throttle(this.didScrollOrResize, 1000 / 60),
      { passive: true }
    );
    document.addEventListener(
      "resize",
      throttle(this.didScrollOrResize, 1000 / 60),
      { passive: true }
    );
    // Trigger event one time on page load
    this.didScrollOrResize();
  },
  methods: {
    didScrollOrResize() {
      const scrollOffset =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // Page did scroll
      this.didScroll = scrollOffset > 0;
      // Control ScrollToBtn
      // this.showScrollToBtn = scrollOffset >= 60;
      // Calculate scroll percentage
      // const docHeight = document.documentElement.scrollHeight;
      // const winHeight =
      //   window.innerHeight || document.documentElement.clientHeight;
      // this.scrollPercent = Math.floor(
      //   (scrollOffset / (docHeight - winHeight)) * 100
      // );
    }
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
#progress-page-scroll {
  position: fixed;
  bottom: 0;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 100px;
}

body {
  background: #d7d7d7;
}
</style>