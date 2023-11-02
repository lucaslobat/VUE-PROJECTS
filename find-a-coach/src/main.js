import { createApp } from "vue";

import App from "./App.vue";
import storeIndex from "./store/storeIndex.js"

const app = createApp(App);

app.use(storeIndex);
app.mount("#app");
