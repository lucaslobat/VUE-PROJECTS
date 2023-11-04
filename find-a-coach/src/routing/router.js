import { createRouter, createWebHistory } from "vue-router";

import CoachList from "../components/Coaches/CoachList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachList },
  ],
});

export default router;
