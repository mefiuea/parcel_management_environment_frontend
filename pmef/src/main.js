import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { VueCookies } from "vue-cookies";

import "./index.css";
import "./assets/styles/main.css";

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(VueCookies).mount("#app");
