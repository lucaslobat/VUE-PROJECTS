/* Methods */
import { createApp } from "vue";

/* Components */
import App from "./App.vue";

/* Store */
import storeIndex from "./store/storeIndex.js";

/* Router */
import router from "./routing/router.js";

import styles from "../src/styles.css";

const app = createApp(App);

app.use(router);
app.use(storeIndex);
app.mount("#app");
