<template>
  <v-container class="d-flex align-center ga-2 justify-space-between pa-0">
    <!-- Contenido para pantallas grandes -->
    <div class="d-none d-sm-flex align-center ga-2 text-h5">
      <RouterLink
        to="/"
        class="d-flex ga-2 align-center font-weight-medium text-h5"
      >
        <v-icon icon="mdi-book-open-page-variant"></v-icon>
        <span class="font-weight-black">Scholar Docs</span>
      </RouterLink>
    </div>

    <!-- Contenido para pantallas pequeñas -->
    <div class="d-flex d-sm-none align-center">
      <RouterLink to="/" class="font-weight-medium text-h6">
        <v-icon icon="mdi-book-open-page-variant"></v-icon>
      </RouterLink>
    </div>

    <div class="d-flex ga-2">
      <RouterLink to="/" class="font-weight-medium text-h6">
        <v-icon class="d-sm-none" icon="mdi-home"></v-icon>
        <span class="d-none d-sm-flex text-h6 font-weight-medium">Home</span>
      </RouterLink>

      <RouterLink to="/" class="font-weight-medium text-h6">
        <v-icon class="d-sm-none" icon="mdi-account"></v-icon>
        <span class="d-none d-sm-flex text-h6 font-weight-medium"
          >My profile</span
        >
      </RouterLink>

      <RouterLink to="/" class="font-weight-medium text-h6">
        <v-icon class="d-sm-none" icon="mdi-book-open"></v-icon>
        <span class="d-none d-sm-flex text-h6 font-weight-medium"
          >My library</span
        >
      </RouterLink>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
