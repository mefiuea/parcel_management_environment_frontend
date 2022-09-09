import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import "./index.css";
import "./assets/styles/main.css";
import MainPage from "./components/MainPage.vue";
import RegisterPage from "./components/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "MainPage", component: MainPage },
    { path: "/register", name: "RegisterPage", component: RegisterPage },
  ],
});

createApp(App).use(router).mount("#app");
