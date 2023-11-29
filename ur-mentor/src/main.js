/* Built-in Methods */
import { createApp } from "vue";

/* Components */
import App from "./App.vue";

/* Store */
import mainStore from "./Vuex-store/main-store";

/* Router */
import router from "./Routes/router.js";

/* Styles */
import "./style.css";

const app = createApp(App);

app.use(mainStore);
app.use(router);
app.mount("#app");
