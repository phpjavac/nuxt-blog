<template lang="pug">
  v-toolbar-items
    // Nav button
    v-toolbar-items
      v-btn(flat @click.stop="openNavDrawer")
        v-icon(:color="didScroll ? 'primary' : 'secondary'")
          | fas fa-bars
</template>
<script>
export default {
  props: {
    didScroll: {
      type: Boolean
    }
  },
  methods: {
    openNavDrawer() {
      this.$store.commit("OPEN_NAV_DRAWER");
    }
  }
};
</script>