import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import RegisterPage from "../components/RegisterPage.vue";

const routes = [
  { path: "/", name: "MainPage", component: MainPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
