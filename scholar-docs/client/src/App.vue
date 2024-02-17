<template>
  <AppLayout>
    <!-- Header -->
    <template v-slot:header>
      <Header />
    </template>

    <template v-slot:body>
      <DocumentSearch/>
    </template>
  </AppLayout>
</template>

<script setup>
import DocumentSearch from "./views/DocumentSearch.vue";
</script>

<style scoped>
.title {
  color: var(--text-color);
}
</style>
