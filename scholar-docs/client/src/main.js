import { createApp } from "vue";
import "./style.css";

/* Components */
import App from "./App.vue";
import AppLayout from "./layout/AppLayout.vue";
import CustomInput from "./components/CustomInput.vue";

/* Plugins */
import vuetify from "./plugins/vuetify";
const app = createApp(App);

app.use(vuetify);
app.component("AppLayout", AppLayout);
app.component('CustomInput',CustomInput);
app.mount("#root-app");