import { createRouter, createWebHistory } from "vue-router";

import Home from "../App.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
