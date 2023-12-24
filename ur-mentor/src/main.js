/* Built-in Methods */
import { createApp } from "vue";

/* Styles */
import "./style.css";

/* Components */
import App from "./App.vue";
import BaseContainer from "./components/UserInterface/BaseContainer.vue";
import BaseButton from "./components/UserInterface/BaseButton.vue";
import BaseBadge from "./components/UserInterface/BaseBadge.vue";

/* Store */
import storeIndex from "./Store/store-index";

/* Router */
import router from "./Routes/router.js";


const app = createApp(App);

app.component("BaseContainer", BaseContainer);
app.component("BaseButton", BaseButton);
app.component("BaseBadge", BaseBadge);

app.use(storeIndex);
app.use(router);
app.mount("#app");
