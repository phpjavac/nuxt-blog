<template lang="pug">
  v-toolbar(
    class="header-nav"
    :flat="!didScroll"
    height="60"
    app
  )
    v-spacer

    //- // Logo
    v-toolbar-title.header-logo
      //- n-link(extra)
      img(src="/logo.png" alt="Mr.Hiei")

    v-spacer

    // Toolbar items
    v-toolbar-items
      // Page buttons
      v-toolbar-items(
        v-for="(page, index) in pages"
        :key="index"
      )
        v-btn(
          active-class=""
          class="toolbar-item-link"
          :to="page.path"
          flat
          nuxt
          exact
        )
          v-icon(class="mr-1" small)
            | {{ page.icon }}
          | {{ page.text }}

      // Language buttons
      //- v-toolbar-items
      //-   v-menu(offset-y transition="slide-y-transition")
      //-     v-btn(slot="activator" flat)
      //-       v-icon(class="mr-1" small)
      //-         | fas fa-globe
            //- | {{ $t('menu.locale') }}

          //- v-list
          //-   v-list-tile(
          //-     v-for="(locale, index) in locales"
          //-     :key="index"
          //-     nuxt
          //-     exact
              
          //-   )
          //-     v-list-tile-title.text-xs-center
          //-       v-flex(tag="span" class="primary-text body-2")
          //-         | {{ locale.name }}

      // Search button
      //- the-search-button

    v-spacer
</template>
<script>
export default {
  props:{
    didScroll:{
      type:Boolean,
      default:false
    },
    pages:{
      type:Array,
      default:()=>{
        return []
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.nav-transparent
  .v-toolbar__items >>> .v-btn
    color #d7d7d7
  .toolbar-item-link >>> .v-btn__content::after
    background-color #d7d7d7 !important

.nav-sticky .v-toolbar__items >>> .v-btn
  color var(--v-primary-base)

.toolbar-item-link
  >>> .v-btn__content::after
    content ''
    position absolute
    left 0
    bottom -10px
    width 100%
    height 3px
    border-radius 1.5px
    background-color #e8676b
    transform scaleX(0)
    transform-origin center top
    transition transform .3s
  &:hover >>> .v-btn__content::after
    transform scaleX(1)
</style>
