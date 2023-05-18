import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import "@ui5/webcomponents/dist/MultiInput";
import "@ui5/webcomponents/dist/Dialog";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents-icons/dist/AllIcons";
import "@ui5/webcomponents-icons-tnt/dist/AllIcons";
import "@ui5/webcomponents-icons-business-suite/dist/AllIcons";
import "@ui5/webcomponents-fiori/dist/ShellBar";

const app = createApp(App);

app.use(router);

app.mount("#app");
