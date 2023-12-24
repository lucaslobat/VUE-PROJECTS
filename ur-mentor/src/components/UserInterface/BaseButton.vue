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
  background:  #E4E4DE;
  color: #1B1B1B;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  margin: 0.5rem 0.2rem;
  text-decoration: none;
  background-color: #fdb652;
}

.styled-button:hover {
  background: #FF9F1C;
  color: #1B1B1B;
}
</style>
