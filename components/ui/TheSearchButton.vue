<template lang="pug">
  // Search button
  v-toolbar-items
    v-btn(flat @click.stop="openSearchDialog")
      v-icon(class="mr-1" small)
        | fas fa-search
</template>

<script>
export default {
  methods: {
    openSearchDialog(){
      
    }
  },
}
</script>
