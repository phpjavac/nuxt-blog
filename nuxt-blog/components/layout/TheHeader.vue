<template lang="pug">
  header.header
    v-flex(class="header-present" pa-0 wrap)
      // Desktop navbar
      the-navbar-desktop(
        :didScroll="didScroll"
        :pages="pages"
        :class="didScroll ? 'nav-sticky' : 'nav-transparent'"
      )
    // Background
    div.header-background
      // Brand
      div.header-brand.text-xs-center.secondary-text
        div.brand-name.display-2
          span.hidden-text 绎
          span.hidden-text 紫
          span.hidden-text 洛
          span.hidden-text 英
          span.present-text H
          span.present-text I
          span.present-text !

        div.brand-motto.subheading
          span.hidden-text 万
          span.hidden-text 物
          span.hidden-text 有
          span.hidden-text 因
          span.hidden-text 必
          span.hidden-text 有
          span.hidden-text 果
          span.hidden-text ，
          span.hidden-text 洗
          span.hidden-text 洗
          span.hidden-text 皆
          span.hidden-text 可
          span.hidden-text 吃
</template>
<script>
export default {
  components: {
    TheNavbarMobile: () => import("./mobile/TheNavbar.vue"),
    TheNavbarDesktop: () => import("./desktop/TheNavbar.vue"),
    TheNavDrawer: () => import("@/components/layout/mobile/TheNavDrawer.vue")
  },
  props: {
    didScroll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      pages: [
        {
          path: "/",
          icon: "fas fa-home",
          text: "首页"
        },
        {
          path: "tags",
          icon: "fas fa-tags",
          text: "文章标签"
        },
        {
          path: "archives",
          icon: "fas fa-archive",
          text: "归档"
        },
        {
          path: "about",
          icon: "fas fa-portrait",
          text: "关于"
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
$mb = 120px

.header
  margin-bottom $mb
  // Container
  &-present
    height 60px
    >>> .v-icon
     transition color .3s cubic-bezier(0.25, 0.8, 0.5, 1) !important
    // Animation
    .nav-transparent
      position relative !important
      padding 15px 0
      background-color transparent
      >>> .v-icon
        color #d7d7d7
    .nav-sticky
      background-color white
      >>> .v-icon
        color var(--v-primary-base)

    // Nav
    .header-nav
      text-align center
      transition-property background-color, padding
      transition-duration .3s
      transition-timing-function ease-out
      transition-delay .1s
      .header-logo
        margin 0
      +screen-width-less-than(sm)
        padding 0
        >>> .v-toolbar__content
          padding 0

  // Background
  &-background
    height 360px
    position absolute
    top 0
    left 0
    right 0
    background-image url('/sites/upload/cover-3.jpg')
    background-repeat no-repeat
    background-size cover
    background-position center center
    &::before
      content ''
      width 100%
      height 100%
      position absolute
      top 0
      left 0

  // Brand
  &-brand
    position relative
    top $mb
    max-width 360px
    margin 0 auto

    .brand-name, .brand-motto
      display flex
      justify-content center
      color #d7d7d7
    .brand-motto
      margin-top $spacer * 1.5

    .hidden-text
      max-width 0
      opacity 0
      transition all .5s ease-in

    &:hover .hidden-text
      max-width 1em
      opacity 1
    &:hover .present-text
      max-width 0
      opacity 0
</style>
