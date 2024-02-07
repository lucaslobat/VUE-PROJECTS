<template>
  <v-card variant="tonal" :subtitle="subtitle" :text="text">
   <template v-slot:title><a :href="link" target="_blank" class="text-decoration-none">{{title}}</a></template>
  </v-card>
</template>

<script setup>
const props = defineProps(["key", "title", "subtitle", "text", "link"]);
</script>

<style scoped></style>
