import { createRouter, createWebHistory } from "vue-router";

import DocumentSearch from "../views/DocumentSearch.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: DocumentSearch, name: "DocumentSearch" }],
});

export default router;