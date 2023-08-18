import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import apolloProvider from "./utils/apolloClient";
//import router from "./utils/routes"; Router set up for later

createApp(App).use(apolloProvider).mount("#app");
