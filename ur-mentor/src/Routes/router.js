import { createRouter, createWebHistory } from "vue-router";

import MentorList from "../components/MentorComponents/MentorList.vue";
import MentorDetails from "../components/MentorComponents/MentorDetails.vue";
import MentorContactForm from "../components/MentorComponents/MentorContactForm.vue";
import RequestList from "../components/RequestComponents/RequestList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/mentors" },
    { path: "/mentors", component: MentorList },
    {
      path: "/mentors:id",
      component: MentorDetails,
      children: [{ path: "/contact", component: MentorContactForm }],
    },
    {path:"/requests", component: RequestList}
  ],
});

export default router;
