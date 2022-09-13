import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import RegisterPage from "../components/RegisterPage.vue";

const routes = [
  { path: "/", name: "MP", component: MainPage },
  { path: "/register", name: "RP", component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
