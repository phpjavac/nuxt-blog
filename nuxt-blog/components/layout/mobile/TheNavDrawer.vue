<template lang="pug">
  //- v-navigation-drawer(
  //-   v-model="show"
  //-   temporary
  //-   fixed
  //-   app
  //- )
  //-   // Avatar
  //-   v-list
  //-     v-list-tile(avatar)
  //-       v-list-tile-avatar
  //-         img(src="https://avatars1.githubusercontent.com/u/20240686?v=4")
  //-       v-list-tile-content
  //-         v-list-tile-title
  //-           | 万物有因必有果，洗洗皆可吃

  //-   v-list(dense)
  //-     v-divider

  //-     // Page link
  //-     v-list-tile(
  //-       v-for="(page, index) in pages"
  //-       :key="index"
  //-       :to="page.path"
  //-       active-class=""
  //-       nuxt
  //-       exact
  //-     )
  //-       v-list-tile-action
  //-         v-icon(color="primary" small)
  //-           | {{ page.icon }}

  //-       v-list-tile-content
  //-         v-list-tile-title
  //-           | {{ page.text }}

  //-     v-divider

  //-     // Locales
  //-     v-list-group(prepend-icon="fas fa-globe")
  //-       template(#activator)
  //-         v-list-tile
  //-           v-list-tile-title
  //-             | {{ $t('menu.locale') }}
  //-       v-list-tile(
  //-         v-for="(locale, index) in locales"
  //-         :key="index"
  //-         nuxt
  //-         exact
  //-         @click="switchLocale(locale.code)"
  //-       )
  //-         v-list-tile-action

  //-         v-list-tile-content
  //-           v-list-tile-title
  //-             | {{ locale.name }}

</template>
