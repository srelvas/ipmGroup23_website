import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Assignments from "@/views/Assignments.vue";

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
    path: "/assignments",
    name: "Assignments",
    component: Assignments,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;