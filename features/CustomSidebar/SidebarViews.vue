<template>
  <div class="sidebar-view">
    <h1>View {{ selectedView + 1 }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    selectedView: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style scoped>
.sidebar-view {
  width:50%;
  height:50vh;
  flex: 1;
  padding: 0.5em;
  border: 0.5rem solid red;
}
</style>
