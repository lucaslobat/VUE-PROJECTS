<template>
  <div class="d-flex flex-column ga-3">
    <DocumentItem
      v-for="item in 3"
      title="History and the Idea of Progress"
      subtitle="AM Melzer, MR Zinman, J Weinberger - 2019 - books.google.com"
      text="… Knowledge of the end of history does require knowledge of the whole of things, which, it turns
    out… knowledge of a set of alternatives or problems that confront us without any possibility of …"
    />
  </div>
</template>

<script>
import DocumentItem from "./DocumentItem.vue";
export default {
  components: { DocumentItem },
};
</script>

<style scoped></style>
