<template>
  <div class="d-flex fake-input pa-3 align-center justify-center">
    <v-icon :icon="prependIcon" size="small" color="#B9BDCF" />

    <v-text-field
      v-model="inputText"
      @keyup.enter="initiateSearch"
      :placeholder="placeholder"
      variant="solo"
      density="compact"
      hide-details
      bg-color="white"
      flat
      clearable
    />

    <slot name="searchButton">
      <v-btn @click="initiateSearch" :icon="appendIcon" size="small"> </v-btn>
    </slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["placeholder", "prependIcon", "appendIcon"]);
const emits = defineEmits(["initiateSearch"]);

const inputText = ref("");

const initiateSearch = () => {
  emits("initiateSearch", inputText.value);
  inputText.value = "";
};
</script>

<style scoped></style>
