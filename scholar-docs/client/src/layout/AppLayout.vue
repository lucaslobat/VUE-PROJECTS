<template>
  <v-container class="app-container">
    <slot name="header"></slot>

    <!-- Body -->
    <slot name="bodyView"> </slot>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  /*  outline: 2px solid blue; */
}

.main-content {
  /* outline: 2px solid greenyellow; */
}
.app-container {
  min-height: 100vh;
}
</style>
