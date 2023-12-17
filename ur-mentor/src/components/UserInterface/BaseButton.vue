<template>
  <RouterLink v-if="isRouterLink" :to="toProp" :class="customClass">
    <slot></slot>
  </RouterLink>

  <a v-else :class="customClass">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    isRouterLink: {
      type: Boolean,
      required: false,
      default: false,
    },
    customClass: {
      type: String,
      required: false,
      default: null,
    },
    toProp: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
<style scoped>
.styled-button {
  background:  #595f39;
  color: #E4E4DE;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  margin: 0.5rem 0.2rem;
  text-decoration: none;
}

.styled-button:hover {
  background: #E4E4DE;
  color: #595f39;
}
</style>
