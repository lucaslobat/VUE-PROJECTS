import { createStore } from "vuex";

import coachModule from "./coach/coachIndex.js";

const storeIndex = createStore({
  modules: {
    coachModule: coachModule,
  },
});

export default storeIndex;
