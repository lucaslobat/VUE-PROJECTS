import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

/* Plugins */
import vuetify from "./plugins/vuetify";
import axios from "axios";

const app = createApp(App);

app.use(vuetify);
app.use(axios);
app.mount("#app");
