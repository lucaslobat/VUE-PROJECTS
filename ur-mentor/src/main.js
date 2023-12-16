/* Built-in Methods */
import { createApp } from "vue";

/* Components */
import App from "./App.vue";
import BaseCard from "./components/UserInterface/BaseCard.vue";
import BaseButton from "./components/UserInterface/BaseButton.vue";
import BaseBadge from "./components/UserInterface/BaseBadge.vue";

/* Store */
import mainStore from "./Vuex-store/main-store";

/* Router */
import router from "./Routes/router.js";

/* Styles */
import "./style.css";

const app = createApp(App);

app.component("BaseCard", BaseCard);
app.component("BaseButton", BaseButton);
app.component("BaseBadge", BaseBadge);

app.use(mainStore);
app.use(router);
app.mount("#app");
