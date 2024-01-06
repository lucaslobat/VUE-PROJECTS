<template>
  <div :class="customClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      required: true,
      default: null,
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  background-color: #fff;
  padding: 1rem;
  margin: 1rem auto;
}

.card-item {
  display: flex;
  background-color: #fff;
  padding: 1rem;
}
</style>
