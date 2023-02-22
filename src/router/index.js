import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/pages/HomeView";
import KanbanView from "@/pages/Kanban/KanbanView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "Home",
  },
  {
    path: "/kanban",
    component: KanbanView,
    name: "Kanban",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
