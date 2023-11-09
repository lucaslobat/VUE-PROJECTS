import { createRouter, createWebHistory } from "vue-router";

/* Coaches */
import CoachDetail from "../components/Coaches/CoachDetail.vue";
import CoachList from "../components/Coaches/CoachList.vue";
import CoachRegistration from "../components/Coaches/CoachRegistration.vue";

/* Requests */
import RequestForm from "../components/Requests/RequestForm.vue";
import RequestList from "../components/Requests/RequestList.vue";

import NotFound from "../components/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [
        { path: "contact", component: RequestForm },
      ] /* /coaches/id/contact */,
    },
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: RequestList },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
