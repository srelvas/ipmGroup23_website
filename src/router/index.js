import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Assignment1 from "@/views/Assignment1.vue";
import Assignment2 from "@/views/Assignment2.vue";
import Assignment3 from "@/views/Assignment3.vue";
import ProjectFase1 from "@/views/ProjectFase1.vue";

const routes = [
  {
    path: "/ipmGroup23_website",
    name: "Home",
    component: Home,
  },
  {
    path: "/ipmGroup23_website/about",
    name: "About",
    component: About,
  },
  {
    path: "/ipmGroup23_website/assignments1",
    name: "Assignment1",
    component: Assignment1,
  },
  {
    path: "/ipmGroup23_website/assignments2",
    name: "Assignment2",
    component: Assignment2,
  },
  {
    path: "/ipmGroup23_website/assignments3",
    name: "Assignment3",
    component: Assignment3,
  },
  {
    path: "/ipmGroup23_website/assignments4",
    name: "Assignment4",
    component: Assignment3,
  },
  {
    path: "/ipmGroup23_website/projectFase1",
    name: "ProjectFase1",
    component: ProjectFase1,
  },
  /* {
    path: "/ProjectFase2",
    name: "ProjectFase2",
    component: ProjectFase2,
  }, */
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
