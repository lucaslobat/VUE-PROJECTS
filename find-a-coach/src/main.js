/* Methods */
import { createApp } from "vue";

/* Components */
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";

/* Store */
import storeIndex from "./store/storeIndex.js";

/* Router */
import router from "./routing/router.js";

import styles from "../src/styles.css";

const app = createApp(App);
app.component("BaseCard", BaseCard);
app.component("BaseButton", BaseButton);
app.component("BaseBadge", BaseBadge);

app.use(router);
app.use(storeIndex);

app.mount("#app");
