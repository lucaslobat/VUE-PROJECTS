<template>
  <div class="d-flex fake-input pa-3 align-center justify-center">
    <slot name="inputIcon"> </slot>
        <v-text-field
        v-model="inputText"
        :placeholder="placeholder"
        variant="solo"
        density="compact"
        hide-details
        bg-color="white"
        flat
        clearable
        />
    <slot name="searchButton"></slot>
  </div>
</template>

<script>
export default {
  props: ["placeholder"],
  data() {
    return {
      inputText: "",
    };
  },
};
</script>

<style scoped></style>
