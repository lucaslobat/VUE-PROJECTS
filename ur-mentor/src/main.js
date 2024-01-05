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
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret, faHouse } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faHouse);

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

app.component("BaseContainer", BaseContainer);
app.component("BaseButton", BaseButton);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(storeIndex);
app.use(router);
app.use(vuetify);
app.mount("#app");
