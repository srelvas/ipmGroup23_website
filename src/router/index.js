import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Assignment1 from "@/views/Assignment1.vue";
import Assignment2 from "@/views/Assignment2.vue";
import Assignment3 from "@/views/Assignment3.vue";
import ProjectFase1 from "@/views/ProjectFase1.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/assignments1",
    name: "Assignment1",
    component: Assignment1,
  },
  {
    path: "/assignments2",
    name: "Assignment2",
    component: Assignment2,
  },
  {
    path: "/assignments3",
    name: "Assignment3",
    component: Assignment3,
  },
  {
    path: "/assignments4",
    name: "Assignment4",
    component: Assignment3,
  },
  {
    path: "/ProjectFase1",
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
  history: createWebHistory(),
  routes,
});

export default router;