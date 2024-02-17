import { createApp } from "vue";
import router from "./router/routes.js";
import "./style.css";

/* Components */
import App from "./App.vue";
import AppLayout from "./layout/AppLayout.vue";
import CustomInput from "./components/CustomInput.vue";
import Header from "./layout/Header.vue";

/* Plugins */
import vuetify from "./plugins/vuetify";
const app = createApp(App);

app.use(vuetify);
app.use(router);
app.component("AppLayout", AppLayout);
app.component("CustomInput", CustomInput);
app.component("Header", Header);
app.mount("#root-app");
