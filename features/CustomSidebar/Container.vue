<template>
  <div id="app">
    <SidebarTabs @view-selected="updateSelectedView"></SidebarTabs>
    <SidebarViews :selectedView="selectedView" />
  </div>
</template>

<script>
import SidebarTabs from "./SidebarTabs.vue";
import SidebarViews from "./SidebarViews.vue";

export default {
  name: "Container",
  components: {
    SidebarTabs,
    SidebarViews,
  },
  data: () => ({
    selectedView: null,
  }),
  methods: {
    updateSelectedView(index) {
      this.selectedView = index;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
