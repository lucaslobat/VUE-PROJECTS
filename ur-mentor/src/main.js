/* Built-in Methods */
import { createApp } from "vue";

/* Styles */
import "./style.css";

/* Components */
import App from "./App.vue";
import BaseContainer from "./components/UserInterface/BaseContainer.vue";
import BaseButton from "./components/UserInterface/BaseButton.vue";
import BaseBadge from "./components/UserInterface/BaseBadge.vue";

/* Vuetify */
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/* Store */
import storeIndex from "./Store/store-index";

/* Router */
import router from "./Routes/router.js";


const app = createApp(App);
const vuetify = createVuetify({components,directives});

app.component("BaseContainer", BaseContainer);
app.component("BaseButton", BaseButton);
app.component("BaseBadge", BaseBadge);



app.use(storeIndex);
app.use(router);
app.use(vuetify);
app.mount("#app");
