<template>
  <v-container class="app-container">
    <!-- Header -->
    <v-row class="d-flex justify-center">
      <v-col class="header" cols="12" xs="12" sm="12" md="8" lg="8">
        <slot name="header"></slot>
      </v-col>
    </v-row>

    <!-- Body -->
    <slot name="body"> </slot>
  </v-container>
</template>

<script setup></script>

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
