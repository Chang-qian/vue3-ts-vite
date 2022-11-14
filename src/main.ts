import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import globalRegister from "../src/global/index";
import { createPinia } from "pinia";
import "normalize.css";
import "./assets/css/index.less";
const app = createApp(App).use(router).use(createPinia()).use(globalRegister);
app.mount("#app");
