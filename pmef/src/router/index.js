import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import RegisterSuccess from "../components/RegisterSuccess.vue";
import RegisterError from "../components/RegisterError.vue";

const routes = [
  { path: "/", name: "MainPage", component: MainPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  { path: "/register-success", name: "RegisterSuccess", component: RegisterSuccess },
  { path: "/register-error", name: "RegisterError", component: RegisterError },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
