import { createApp } from "vue";
import "./style.css";

/* Components */
import App from "./App.vue";
import AppLayout from "./layout/AppLayout.vue";

/* Plugins */
import vuetify from "./plugins/vuetify";
const app = createApp(App);

app.use(vuetify);
app.component("AppLayout", AppLayout);
app.mount("#root-app");
