import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import RegisterSuccess from "../components/RegisterSuccess.vue";
import ServerError from "../components/ServerError.vue";
import LoginPage from "../components/LoginPage.vue";

const routes = [
  { path: "/", name: "MainPage", component: MainPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  { path: "/register-success", name: "RegisterSuccess", component: RegisterSuccess },
  { path: "/server-error", name: "ServerError", component: ServerError },
  { path: "/login", name: "LoginPage", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
