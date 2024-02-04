<template>
  <v-card variant="tonal" :title="title" :subtitle="subtitle" :text="text">
    <v-card-actions>
      <v-btn>Click me</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps(['title','subtitle','text'])
</script>

<style scoped></style>
