import { createStore } from "vuex";

/* Modules imports */
import mentorsModule from "./mentors-module/mentors-module";

const storeIndex = createStore({
  modules: {
    mentorsModule: mentorsModule,
  },
});

export default storeIndex;
