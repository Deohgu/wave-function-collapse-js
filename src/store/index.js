import Vue from "vue";
import Vuex from "vuex";

import identities from "./identities";
import grid from "./grid";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    identities,
    grid,
  },
});
