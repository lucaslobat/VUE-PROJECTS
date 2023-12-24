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
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  padding: 1rem;
  margin: 1rem auto;
}

.card-item {
  display: flex;
  background-color: #fff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  padding: 1rem;
}
</style>
