import { createApp } from "vue";

import "./assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.js";
import router from "./router";
import store from "./store";

import App from "./App.vue";

createApp(App).use(router).use(store).mount("#app");
