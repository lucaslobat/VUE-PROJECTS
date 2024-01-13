/* Built-in Methods */
import { createApp } from "vue";

/* Styles */
import "./style.css";

/* Components */
import App from "./App.vue";
import BaseContainer from "./components/UserInterface/BaseContainer.vue";
import BaseButton from "./components/UserInterface/BaseButton.vue";

/* Vuetify */
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

/* FontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

/* Store */
import storeIndex from "./Store/store-index";

/* Router */
import router from "./Routes/router.js";



const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

library.add(fas);

app.component("BaseContainer", BaseContainer);
app.component("BaseButton", BaseButton);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(storeIndex);
app.use(router);
app.use(vuetify);
app.mount("#app");
