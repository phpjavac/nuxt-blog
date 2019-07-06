<template lang="pug">
  v-toolbar(
    class="header-nav"
    :flat="!didScroll"
    height="60"
    app
  )
    // Burger button
    v-toolbar-items
      // Nav button
      v-toolbar-items
        v-btn(flat @click.stop="openNavDrawer")
          v-icon
            | fas fa-bars

    v-spacer

    // Logo
    v-toolbar-title.header-logo
      n-link(:to="localePath('index')" extra)
        img(src="/logo.png" alt="Mr.Hiei")

    v-spacer

    // Search button
    //- the-search-button
</template>
