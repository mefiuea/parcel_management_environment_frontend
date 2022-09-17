import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import RegisterSuccess from "../components/RegisterSuccess.vue";
import ServerError from "../components/ServerError.vue";
import LoginPage from "../components/LoginPage.vue";
import Cars from "../components/Cars.vue";
import CarsRegistration from "../components/CarsRegistration.vue";
import CarsRegistrationSuccess from "../components/CarsRegistrationSuccess.vue";
import Messages from "../components/Messages.vue";

const routes = [
  { path: "/", name: "MainPage", component: MainPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  { path: "/register-success", name: "RegisterSuccess", component: RegisterSuccess },
  { path: "/server-error", name: "ServerError", component: ServerError },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/cars", name: "Cars", component: Cars },
  { path: "/cars-registration", name: "CarsRegistration", component: CarsRegistration },
  { path: "/cars-registration-success", name: "CarsRegistrationSuccess", component: CarsRegistrationSuccess },
  { path: "/messages", name: "Messages", component: Messages },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
