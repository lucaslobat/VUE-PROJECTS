import { createStore } from "vuex";

/* Modules imports */
import mentorsIndex from "./mentors-module/mentors-index.js";

const storeIndex = createStore({
  modules: {
    mentorsModule: mentorsIndex,
  },
});

export default storeIndex;
