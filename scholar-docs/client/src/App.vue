<template>
  <AppLayout>
    <!-- Header -->
    <template v-slot:header>
      <Header />
    </template>

    <template v-slot:bodyView>
      <DocumentSearch/>
    </template>
  </AppLayout>
</template>

<script>
import DocumentSearch from "./views/DocumentSearch.vue";
export default {
  components: { DocumentSearch },
  data() {
    return {};
  },
};
</script>

<style scoped>
.title {
  color: var(--text-color);
}
</style>
